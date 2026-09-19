import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class ReportesService {
  async empleabilidad() {
    const db = getFirestore();
    const snapshot = await db.collection('tracerResponses').get();
    const data = snapshot.docs.map((d) => d.data());
    const total = data.length;
    const porEstado: Record<string, number> = {};
    data.forEach((d) => { const e = d.estado; porEstado[e] = (porEstado[e] || 0) + 1; });
    return { total, porEstado };
  }
  async export() { return { format: 'CSV', data: 'anonimizado' }; }
}
