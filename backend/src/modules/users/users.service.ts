import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class UsersService {
  async listar() { return []; }
  async cambiarRol(body: any) { return { success: true }; }
}
