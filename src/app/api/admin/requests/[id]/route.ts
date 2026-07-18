import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../../lib/adminAuth";
import { deleteContactRequest, updateContactRequest } from "../../../../../lib/cmsServer";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const { status } = await request.json().catch(() => ({ status: "read" }));
  try {
    const ok = await updateContactRequest(id, status === "new" ? "new" : "read");
    return ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Không tìm thấy yêu cầu." }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Không thể cập nhật yêu cầu." }, { status: 503 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  try {
    const ok = await deleteContactRequest(id);
    return ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Không tìm thấy yêu cầu." }, { status: 404 });
  } catch {
    return NextResponse.json({ error: "Không thể xóa yêu cầu." }, { status: 503 });
  }
}
