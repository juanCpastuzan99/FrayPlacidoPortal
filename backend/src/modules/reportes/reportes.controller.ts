import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}
  @Get('empleabilidad') @UseGuards(FirebaseAuthGuard) @Roles('admin', 'moderador') empleabilidad() { return this.reportesService.empleabilidad(); }
  @Get('export') @UseGuards(FirebaseAuthGuard) @Roles('admin') export() { return this.reportesService.export(); }
}
