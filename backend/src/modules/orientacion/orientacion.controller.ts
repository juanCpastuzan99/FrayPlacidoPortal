import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrientacionService } from './orientacion.service';
import { CreateOportunidadDto } from './dto/create-oportunidad.dto';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('orientacion')
export class OrientacionController {
  constructor(private readonly orientacionService: OrientacionService) {}
  @Get('recomendaciones') recomendaciones(@Body() body: { enfasis: string }) { return this.orientacionService.recomendaciones(body.enfasis); }
  @Get('oportunidades') listarOportunidades() { return this.orientacionService.listar(); }
  @Post('publicar') @UseGuards(FirebaseAuthGuard) @Roles('moderador', 'admin') publicar(@Body() dto: CreateOportunidadDto) { return this.orientacionService.publicar(dto); }
}
