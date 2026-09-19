import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { InitializeApp, cert, getApps } from 'firebase-admin/app';

@Injectable()
export class AuthService {
  private app: ReturnType<typeof getApps()[0]> | null = null;

  private getApp() {
    if (!this.app) {
      if (getApps().length === 0) {
        this.app = InitializeApp({ credential: cert({ projectId: '', privateKey: '', clientEmail: '' }) });
      } else {
        this.app = getApps()[0];
      }
    }
    return this.app;
  }

  async register(dto: RegisterDto) {
    const auth = getAuth(this.getApp());
    const user = await auth.createUser({ email: dto.email, password: dto.password, displayName: dto.displayName });
    const db = getFirestore();
    await db.collection('users').doc(user.uid).set({
      email: dto.email, numeroDocumento: dto.numeroDocumento, sede: dto.sede,
      jornada: dto.jornada, enfasis: dto.enfasis, rol: 'egresado', estadoVerificacion: 'PENDIENTE',
      creadoEn: new Date().toISOString(),
    });
    await auth.sendEmailVerification(user.uid);
    return { uid: user.uid };
  }

  async login(dto: LoginDto) {
    const auth = getAuth(this.getApp());
    return { token: await auth.createCustomToken(dto.email) };
  }

  async forgotPassword(email: string) {
    const auth = getAuth(this.getApp());
    return { sent: true };
  }

  async verify(code: string) {
    return { verified: true };
  }

  async listar() { return []; }
  async cambiarRol(body: any) { return { success: true }; }
}
