import { Controller, Get } from '@nestjs/common';
import { ReportesService } from './reportes.service';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly service: ReportesService) {}
  @Get('empleabilidad') empleabilidad() { return this.service.empleabilidad(); }
  @Get('export') exportar() { return this.service.export(); }
}
