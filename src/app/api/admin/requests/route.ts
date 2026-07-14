import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { listContactRequests } from "../../../../lib/cmsServer";

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  return NextResponse.json(await listContactRequests());
}
