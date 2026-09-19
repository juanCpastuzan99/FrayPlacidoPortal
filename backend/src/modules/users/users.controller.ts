import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly authService: AuthService) {}
  @Get('list') @UseGuards(FirebaseAuthGuard) @Roles('admin') listar() { return this.authService.listar(); }
  @Patch(':uid/rol') @UseGuards(FirebaseAuthGuard) @Roles('admin') cambiarRol(@Body() body: any) { return this.authService.cambiarRol(body); }
}
