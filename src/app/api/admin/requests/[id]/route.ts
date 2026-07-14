import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../../lib/adminAuth";
import { deleteContactRequest, updateContactRequest } from "../../../../../lib/cmsServer";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const { status } = await request.json().catch(() => ({ status: "read" }));
  const ok = await updateContactRequest(id, status === "new" ? "new" : "read");
  return NextResponse.json({ ok });
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { id } = await context.params;
  const ok = await deleteContactRequest(id);
  return NextResponse.json({ ok });
}
