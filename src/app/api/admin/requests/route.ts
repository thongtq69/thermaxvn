import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { listContactRequests } from "../../../../lib/cmsServer";

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;
  try {
    return NextResponse.json(await listContactRequests());
  } catch {
    return NextResponse.json({ error: "Không thể tải yêu cầu khách hàng." }, { status: 503 });
  }
}
