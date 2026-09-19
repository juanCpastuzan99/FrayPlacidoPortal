import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { CreateOportunidadDto } from './dto/create-oportunidad.dto';

@Injectable()
export class OrientacionService {
  async recomendaciones(enfasis: string) {
    const map: Record<string, string[]> = {
      'Sistemas': ['Tecnologías de Desarrollo', 'Ingeniería de Sistemas', 'Ciencias de Datos'],
      'Contabilidad': ['Contaduría Pública', 'Administración de Empresas'],
      'Bachillerato': ['Programas de educación superior'],
    };
    return map[enfasis] || [];
  }
  async listar() {
    const db = getFirestore();
    const snapshot = await db.collection('oportunidades').where('estado', '==', 'PUBLICADO').get();
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
  async publicar(dto: CreateOportunidadDto) {
    const db = getFirestore();
    const ref = await db.collection('oportunidades').add({ ...dto, estado: 'PUBLICADO', creadoEn: new Date().toISOString() });
    return { id: ref.id };
  }
}
