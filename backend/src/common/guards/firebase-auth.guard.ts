import { Injectable } from '@nestjs/common';
import { InitializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseAuthGuard {
  async validateRequest(req: any): Promise<any> {
    const authHeader = req.headers?.authorization;
    const idToken = authHeader?.split('Bearer ')[1];
    if (!idToken) throw new Error('No token');
    const app = getApps().length > 0 ? getApp() : await InitializeApp({ credential: cert({ projectId: '', privateKey: '', clientEmail: '' }) });
    const decoded = await getAuth(app).verifyIdToken(idToken);
    return decoded;
  }
}
