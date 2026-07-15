import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../../lib/adminAuth";
import { getCmsData, updateCmsSection } from "../../../../../lib/cmsServer";
import type { CmsData } from "../../../../../lib/cmsTypes";

type Section = keyof CmsData;
const sections = new Set(["assets", "productGroups", "news", "projects", "footer"]);

export async function PUT(request: Request, context: { params: Promise<{ section: string }> }) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { section } = await context.params;
  if (!sections.has(section)) {
    return NextResponse.json({ error: "Unknown CMS section" }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const validPayload = section === "footer"
    ? Boolean(body && typeof body === "object" && !Array.isArray(body))
    : Array.isArray(body);
  if (!validPayload) {
    return NextResponse.json({ error: "Invalid CMS section payload" }, { status: 400 });
  }

  await updateCmsSection(section as Section, body as CmsData[Section]);
  const data = await getCmsData();
  return NextResponse.json(data[section as Section]);
}
