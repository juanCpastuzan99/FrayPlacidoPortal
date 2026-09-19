import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

let app: ReturnType<typeof getApp> | null = null;

export function getFirebaseAdminApp() {
  if (!app) {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };
    app = initializeApp({ credential: cert(serviceAccount as any) });
  }
  return getApp();
}

export async function verifyIdToken(idToken: string) {
  const auth = getAuth(getFirebaseAdminApp());
  return auth.verifyIdToken(idToken);
}

export function getFirestoreAdmin() {
  return getFirestore(getFirebaseAdminApp());
}
