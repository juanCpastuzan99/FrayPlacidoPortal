import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class AuditoriaService {
  async crear(accion: string, entidad: string, actor: string, metadata: any) {
    const db = getFirestore();
    await db.collection('auditoria').add({ accion, entidad, actor, metadata, timestamp: new Date().toISOString() });
  }
  async listar(_filters?: any) { return []; }
}
