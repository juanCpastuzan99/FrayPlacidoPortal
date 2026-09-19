import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class NotificacionesService {
  async enviar(evento: string, datos: any) {
    const db = getFirestore();
    await db.collection('notificaciones').add({ evento, datos, creadoEn: new Date().toISOString() });
    return { sent: true };
  }
}
