import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps, App } from 'firebase-admin/app';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

const db = getFirestore();

@Injectable()
export class AuthService {
  private app: App | null = null;

  private getApp() {
    if (!this.app) {
      if (getApps().length === 0) {
        this.app = initializeApp({ credential: cert({ projectId: '', privateKey: '', clientEmail: '' }) });
      } else {
        this.app = getApps()[0];
      }
    }
    return this.app;
  }

  async register(dto: RegisterDto) {
    const auth = getAuth(this.getApp());
    const user = await auth.createUser({ email: dto.email, password: dto.password, displayName: dto.displayName });
    await db.collection('users').doc(user.uid).set({
      email: dto.email, numeroDocumento: dto.numeroDocumento, sede: dto.sede,
      jornada: dto.jornada, enfasis: dto.enfasis, rol: 'egresado', estadoVerificacion: 'PENDIENTE',
      creadoEn: new Date().toISOString(),
    });
    return { uid: user.uid };
  }

  async login(_dto: LoginDto) {
    const auth = getAuth(this.getApp());
    return { token: await auth.createCustomToken(_dto.email) };
  }

  async forgotPassword(_email: string) {
    return { sent: true };
  }

  async verify(_code: string) {
    return { verified: true };
  }

  async listar() { return []; }
  async cambiarRol(_body: any) { return { success: true }; }
}
