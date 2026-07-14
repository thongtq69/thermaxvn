import { NextResponse } from "next/server";
import { createContactRequest } from "../../../lib/cmsServer";
import { isMongoConfigured } from "../../../lib/mongodb";

export async function POST(request: Request) {
  if (!isMongoConfigured()) {
    return NextResponse.json({ error: "MongoDB is not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.fullName || !body?.email || !body?.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const contactRequest = await createContactRequest({
    fullName: String(body.fullName),
    companyName: body.companyName ? String(body.companyName) : "",
    email: String(body.email),
    phone: String(body.phone),
    address: body.address ? String(body.address) : "",
    country: body.country ? String(body.country) : "",
    industry: body.industry ? String(body.industry) : "",
    message: body.message ? String(body.message) : "",
    source: body.source ? String(body.source) : "website",
  });

  return NextResponse.json(contactRequest, { status: 201 });
}
