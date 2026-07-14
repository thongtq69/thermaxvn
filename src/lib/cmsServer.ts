import { promises as fs } from "fs";
import path from "path";
import type { CmsData, ContactRequest, ManagedAsset, ManagedNewsItem, ManagedProject } from "./cmsTypes";
import { defaultCmsData } from "./cmsDefaults";
import { getDb, isMongoConfigured, serializeDocument, toObjectId } from "./mongodb";

type CmsSection = "assets" | "productGroups" | "news" | "projects";
type CmsDocument = { _id: string; data?: Partial<CmsData>; createdAt?: Date; updatedAt?: Date };
type LocalStore = { cms?: Partial<CmsData>; contactRequests?: ContactRequest[] };

const cmsId = "thermax-cms";

function localStorePath() {
  return process.env.LOCAL_CMS_FILE
    ? path.join(/* turbopackIgnore: true */ process.cwd(), process.env.LOCAL_CMS_FILE)
    : "";
}

function shouldUseLocalStore() {
  return Boolean(localStorePath());
}

async function readLocalStore(): Promise<LocalStore> {
  const storePath = localStorePath();
  if (!storePath) return {};

  try {
    return JSON.parse(await fs.readFile(storePath, "utf8")) as LocalStore;
  } catch {
    return {};
  }
}

async function writeLocalStore(store: LocalStore) {
  const storePath = localStorePath();
  if (!storePath) return;
  await fs.writeFile(storePath, JSON.stringify(store, null, 2), "utf8");
}

function mergeCmsData(data?: Partial<CmsData>): CmsData {
  return {
    assets: data?.assets?.length ? data.assets : defaultCmsData.assets,
    productGroups: data?.productGroups?.length ? data.productGroups : defaultCmsData.productGroups,
    news: data?.news?.length ? data.news : defaultCmsData.news,
    projects: data?.projects?.length ? data.projects : defaultCmsData.projects,
  };
}

export async function getCmsData(): Promise<CmsData> {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    return mergeCmsData(store.cms);
  }

  if (!isMongoConfigured()) return defaultCmsData;

  try {
    const db = await getDb();
    const document = await db.collection<CmsDocument>("cms").findOne({ _id: cmsId });
    return mergeCmsData(document?.data);
  } catch {
    return defaultCmsData;
  }
}

export async function getCmsSection<T extends CmsData[CmsSection]>(section: CmsSection): Promise<T> {
  const data = await getCmsData();
  return data[section] as T;
}

export async function updateCmsSection(section: CmsSection, value: CmsData[CmsSection]) {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    await writeLocalStore({ ...store, cms: { ...store.cms, [section]: value } });
    return;
  }

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
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    const contactRequest: ContactRequest = {
      ...input,
      id: createId("request"),
      status: "new",
      createdAt: new Date().toISOString(),
    };
    await writeLocalStore({ ...store, contactRequests: [contactRequest, ...(store.contactRequests ?? [])] });
    return contactRequest;
  }

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
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    return store.contactRequests ?? [];
  }

  const db = await getDb();
  const requests = await db.collection("contactRequests").find().sort({ createdAt: -1 }).limit(200).toArray();
  return requests.map((request) => serializeDocument(request));
}

export async function updateContactRequest(id: string, status: ContactRequest["status"]) {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    const contactRequests = (store.contactRequests ?? []).map((request) =>
      request.id === id ? { ...request, status } : request,
    );
    await writeLocalStore({ ...store, contactRequests });
    return contactRequests.some((request) => request.id === id);
  }

  const objectId = toObjectId(id);
  if (!objectId) return false;
  const db = await getDb();
  const result = await db.collection("contactRequests").updateOne({ _id: objectId }, { $set: { status } });
  return result.matchedCount > 0;
}

export async function deleteContactRequest(id: string) {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    const contactRequests = (store.contactRequests ?? []).filter((request) => request.id !== id);
    await writeLocalStore({ ...store, contactRequests });
    return true;
  }

  const objectId = toObjectId(id);
  if (!objectId) return false;
  const db = await getDb();
  const result = await db.collection("contactRequests").deleteOne({ _id: objectId });
  return result.deletedCount > 0;
}
