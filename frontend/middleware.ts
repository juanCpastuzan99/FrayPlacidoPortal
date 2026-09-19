import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getFirebaseAdminApp } from "@/lib/firebase/server";
import { getAuth } from "firebase-admin/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("firebaseToken")?.value;

  const adminPaths = ["/admin", "/documentos"];
  const isAdminPath = adminPaths.some((p) => pathname.startsWith(p));

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
