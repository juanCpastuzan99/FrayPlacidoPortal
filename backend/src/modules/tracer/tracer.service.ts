import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { CreateTracerDto } from './dto/create-tracer.dto';

@Injectable()
export class TracerService {
  async update(dto: CreateTracerDto) {
    const db = getFirestore();
    const ref = db.collection('tracerResponses').doc(`${dto.uid}/${dto.year}`);
    await ref.set({ ...dto, actualizadoEn: new Date().toISOString() }, { merge: true });
    return { success: true };
  }
  async getStats() {
    const db = getFirestore();
    const snapshot = await db.collection('tracerResponses').get();
    const data = snapshot.docs.map((d) => d.data());
    return { total: data.length };
  }
}
