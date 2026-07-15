import { NextResponse } from "next/server";
import { getCmsSection } from "../../../../lib/cmsServer";
import type { CmsData } from "../../../../lib/cmsTypes";

type Section = keyof CmsData;
const sections = new Set(["assets", "productGroups", "news", "projects", "footer"]);

export async function GET(_request: Request, context: { params: Promise<{ section: string }> }) {
  const { section } = await context.params;
  if (!sections.has(section)) {
    return NextResponse.json({ error: "Unknown CMS section" }, { status: 404 });
  }

  return NextResponse.json(await getCmsSection(section as Section));
}
