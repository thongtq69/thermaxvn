import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const cookieName = "thermax-admin";

function adminSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && adminSecret());
}

export function createAdminToken() {
  return crypto.createHmac("sha256", adminSecret()).update("thermax-admin-session").digest("hex");
}

export async function hasAdminSession() {
  if (!isAdminConfigured()) return false;
  return (await cookies()).get(cookieName)?.value === createAdminToken();
}

export async function requireAdmin() {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export function setAdminCookie(response: NextResponse) {
  response.cookies.set(cookieName, createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 12,
    path: "/",
  });
}

export function clearAdminCookie(response: NextResponse) {
  response.cookies.set(cookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}
