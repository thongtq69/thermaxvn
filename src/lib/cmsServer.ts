import { promises as fs } from "fs";
import path from "path";
import type { CmsData, ContactRequest, ManagedAsset, ManagedFooter, ManagedNewsItem, ManagedProject } from "./cmsTypes";
import { defaultCmsData } from "./cmsDefaults";
import { getDb, isMongoConfigured, serializeDocument, toObjectId } from "./mongodb";

type CmsSection = keyof CmsData;
type CmsDocument = { _id: string; data?: Partial<CmsData>; createdAt?: Date; updatedAt?: Date };
type LocalStore = { cms?: Partial<CmsData>; contactRequests?: ContactRequest[] };

const cmsId = "thermax-cms";
const officialPrivacyPolicy = "https://www.thermaxglobal.com/sites/default/files/2026-01/Thermax-PDPF-Policy.pdf";
const officialTermsOfUse = "https://www.thermaxglobal.com/themes/thermax/assets/pdf/Terms-of-Use.pdf";

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
  const footer: ManagedFooter = data?.footer
    ? { ...defaultCmsData.footer, ...data.footer }
    : defaultCmsData.footer;

  return {
    assets: Array.isArray(data?.assets) ? data.assets : defaultCmsData.assets,
    productGroups: Array.isArray(data?.productGroups) ? data.productGroups : defaultCmsData.productGroups,
    news: Array.isArray(data?.news) ? data.news : defaultCmsData.news,
    projects: Array.isArray(data?.projects) ? data.projects : defaultCmsData.projects,
    footer: {
      ...footer,
      legalLinks: (Array.isArray(footer.legalLinks) ? footer.legalLinks : defaultCmsData.footer.legalLinks).map((link) => {
        if (link.href && link.href !== "#") return link;

        const label = link.label.toLowerCase();
        if (link.id === "default-footer-legal-1" || label.includes("privacy")) {
          return { ...link, href: officialPrivacyPolicy };
        }
        if (link.id === "default-footer-legal-2" || label.includes("terms")) {
          return { ...link, href: officialTermsOfUse };
        }
        return link;
      }),
    },
  };
}

export async function getCmsData(options: { fallbackOnError?: boolean } = {}): Promise<CmsData> {
  if (shouldUseLocalStore()) {
    const store = await readLocalStore();
    return mergeCmsData(store.cms);
  }

  if (!isMongoConfigured()) return defaultCmsData;

  try {
    const db = await getDb();
    const document = await db.collection<CmsDocument>("cms").findOne({ _id: cmsId });
    return mergeCmsData(document?.data);
  } catch (error) {
    if (options.fallbackOnError === false) throw error;
    return defaultCmsData;
  }
}

export async function getCmsSection<T extends CmsData[CmsSection]>(
  section: CmsSection,
  options: { fallbackOnError?: boolean } = {},
): Promise<T> {
  const data = await getCmsData(options);
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
  return projects.find(
    (project) => project.status !== "draft" && (project.slug === slug || project.href.endsWith(`/${slug}`)),
  ) ?? null;
}

export async function addAsset(asset: Omit<ManagedAsset, "id" | "createdAt">) {
  const assets = await getCmsSection<ManagedAsset[]>("assets", { fallbackOnError: false });
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
