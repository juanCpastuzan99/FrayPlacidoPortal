import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../firestore/firestore.module';
import { ReportesController } from './reportes.controller';
import { ReportesService } from './reportes.service';

@Module({
  imports: [FirebaseModule],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
