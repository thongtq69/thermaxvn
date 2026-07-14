import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/adminAuth";
import { addAsset } from "../../../../lib/cmsServer";

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    return NextResponse.json({ error: "Cloudinary is not configured" }, { status: 500 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const title = String(form.get("title") || "Uploaded image");
  const alt = String(form.get("alt") || title);

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing image file" }, { status: 400 });
  }

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  const buffer = Buffer.from(await file.arrayBuffer());
  const uploaded = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "thermax-vietnam", resource_type: "image" },
      (error, result) => {
        if (error || !result) reject(error);
        else resolve({ secure_url: result.secure_url, public_id: result.public_id });
      },
    );
    stream.end(buffer);
  });

  const asset = await addAsset({
    title,
    alt,
    url: uploaded.secure_url,
    publicId: uploaded.public_id,
  });

  return NextResponse.json(asset);
}
