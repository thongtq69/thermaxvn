import { NextResponse } from "next/server";
import { hasAdminSession, isAdminConfigured } from "../../../../lib/adminAuth";

export async function GET() {
  return NextResponse.json({
    configured: isAdminConfigured(),
    authenticated: await hasAdminSession(),
  });
}
