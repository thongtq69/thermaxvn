import { NextResponse } from "next/server";
import { isAdminConfigured, setAdminCookie } from "../../../../lib/adminAuth";

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin password is not configured" }, { status: 500 });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  setAdminCookie(response);
  return response;
}
