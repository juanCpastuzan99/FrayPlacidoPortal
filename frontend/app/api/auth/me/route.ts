import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/firebase/server";

export async function GET() {
  try {
    const headersList = await headers();
    const authHeader = headersList.get("authorization");
    const idToken = authHeader?.split("Bearer ")[1];

    if (!idToken) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const decoded = await verifyIdToken(idToken);
    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
