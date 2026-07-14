import type { CmsData, ContactRequest, ManagedAsset, ManagedNewsItem, ManagedProject } from "./cmsTypes";
import { defaultCmsData } from "./cmsDefaults";
import { getDb, isMongoConfigured, serializeDocument, toObjectId } from "./mongodb";

type CmsSection = "assets" | "productGroups" | "news" | "projects";
type CmsDocument = { _id: string; data?: Partial<CmsData>; createdAt?: Date; updatedAt?: Date };

const cmsId = "thermax-cms";

export async function getCmsData(): Promise<CmsData> {
  if (!isMongoConfigured()) return defaultCmsData;

  try {
    const db = await getDb();
    const document = await db.collection<CmsDocument>("cms").findOne({ _id: cmsId });
    return {
      assets: document?.data?.assets?.length ? document.data.assets : defaultCmsData.assets,
      productGroups: document?.data?.productGroups?.length ? document.data.productGroups : defaultCmsData.productGroups,
      news: document?.data?.news?.length ? document.data.news : defaultCmsData.news,
      projects: document?.data?.projects?.length ? document.data.projects : defaultCmsData.projects,
    };
  } catch {
    return defaultCmsData;
  }
}

export async function getCmsSection<T extends CmsData[CmsSection]>(section: CmsSection): Promise<T> {
  const data = await getCmsData();
  return data[section] as T;
}

export async function updateCmsSection(section: CmsSection, value: CmsData[CmsSection]) {
  const db = await getDb();
  await db.collection<CmsDocument>("cms").updateOne(
    { _id: cmsId },
    {
      $set: {
        [`data.${section}`]: value,
        updatedAt: new Date(),
      },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true },
  );
}

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function getManagedProjectBySlug(slug: string): Promise<ManagedProject | null> {
  const projects = await getCmsSection<ManagedProject[]>("projects");
  return projects.find((project) => project.slug === slug || project.href.endsWith(`/${slug}`)) ?? null;
}

export async function addAsset(asset: Omit<ManagedAsset, "id" | "createdAt">) {
  const assets = await getCmsSection<ManagedAsset[]>("assets");
  const nextAsset = { ...asset, id: createId("asset"), createdAt: new Date().toISOString() };
  await updateCmsSection("assets", [nextAsset, ...assets]);
  return nextAsset;
}

export async function createContactRequest(input: Omit<ContactRequest, "id" | "createdAt" | "status">) {
  const db = await getDb();
  const document = {
    ...input,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  const result = await db.collection("contactRequests").insertOne(document);
  return { id: result.insertedId.toString(), ...document };
}

export async function listContactRequests() {
  const db = await getDb();
  const requests = await db.collection("contactRequests").find().sort({ createdAt: -1 }).limit(200).toArray();
  return requests.map((request) => serializeDocument(request));
}

export async function updateContactRequest(id: string, status: ContactRequest["status"]) {
  const objectId = toObjectId(id);
  if (!objectId) return false;
  const db = await getDb();
  const result = await db.collection("contactRequests").updateOne({ _id: objectId }, { $set: { status } });
  return result.matchedCount > 0;
}

export async function deleteContactRequest(id: string) {
  const objectId = toObjectId(id);
  if (!objectId) return false;
  const db = await getDb();
  const result = await db.collection("contactRequests").deleteOne({ _id: objectId });
  return result.deletedCount > 0;
}
