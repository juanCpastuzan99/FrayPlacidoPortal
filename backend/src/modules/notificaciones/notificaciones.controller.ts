import { Controller, Post, Body } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly service: NotificacionesService) {}
  @Post('enviar') enviar(@Body() body: { evento: string; datos: any }) { return this.service.enviar(body.evento, body.datos); }
}
