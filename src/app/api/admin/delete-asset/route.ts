import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { updateCmsSection } from "../../../../lib/cmsServer";
import type { ManagedAsset } from "../../../../lib/cmsTypes";

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = await request.json().catch(() => null);
  const publicId = typeof body?.publicId === "string" ? body.publicId : "";
  const assets = body?.assets;
  if (!Array.isArray(assets)) {
    return NextResponse.json({ error: "Danh sách ảnh không hợp lệ." }, { status: 400 });
  }

  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (publicId && (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET)) {
    return NextResponse.json({ error: "Cloudinary is not configured" }, { status: 500 });
  }

  try {
    await updateCmsSection("assets", assets as ManagedAsset[]);
  } catch {
    return NextResponse.json({ error: "Không thể cập nhật thư viện ảnh." }, { status: 503 });
  }

  if (!publicId) {
    return NextResponse.json({ ok: true, assets });
  }

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    return NextResponse.json({ ok: true, assets });
  } catch {
    return NextResponse.json({ ok: true, assets, cleanupPending: true });
  }
}
