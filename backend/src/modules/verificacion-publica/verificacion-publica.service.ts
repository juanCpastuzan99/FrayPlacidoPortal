import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class VerificacionPublicaService {
  async verificar(folio: string) {
    const db = getFirestore();
    const snapshot = await db.collection('solicitudes').where('folio', '==', folio).get();
    if (snapshot.empty) return { valido: false };
    const doc = snapshot.docs[0].data();
    return { valido: true, folio: doc.folio, tipo: doc.tipo, estado: doc.estado, fecha: doc.creadoEn };
  }
}
