import { verifyIdToken } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getApps, initializeApp, cert } from "firebase-admin/app";

let firebaseAdminApp: ReturnType<typeof initializeApp> | null = null;

function getFirebaseAdminApp() {
  if (!firebaseAdminApp) {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };
    firebaseAdminApp = initializeApp({ credential: cert(serviceAccount as any) });
  }
  return firebaseAdminApp;
}

export async function verifyIdToken(idToken: string): Promise<any> {
  const app = getFirebaseAdminApp();
  const decoded = await getApps().length > 0 ? (await import("firebase-admin/auth")).getAuth().verifyIdToken(idToken) : null;
  return decoded;
}

export async function getFirestoreAdmin() {
  return getFirestore(getFirebaseAdminApp());
}
