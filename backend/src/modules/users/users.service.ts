import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async listar() { return []; }
  async cambiarRol(_body: any) { return { success: true }; }
}
