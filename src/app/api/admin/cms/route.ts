import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { getCmsData } from "../../../../lib/cmsServer";

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  try {
    return NextResponse.json(await getCmsData({ fallbackOnError: false }));
  } catch {
    return NextResponse.json({ error: "Không thể kết nối cơ sở dữ liệu." }, { status: 503 });
  }
}
