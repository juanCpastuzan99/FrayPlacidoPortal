import { Controller, Get } from '@nestjs/common';
import { VerificacionPublicaService } from './verificacion-publica.service';

@Controller('verificar')
export class VerificacionPublicaController {
  constructor(private readonly service: VerificacionPublicaService) {}
  @Get(':folio') verificar(@Get() params: { folio: string }) { return this.service.verificar(params.folio); }
}
