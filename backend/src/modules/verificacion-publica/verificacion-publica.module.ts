import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../firestore/firestore.module';
import { VerificacionPublicaController } from './verificacion-publica.controller';
import { VerificacionPublicaService } from './verificacion-publica.service';

@Module({
  imports: [FirebaseModule],
  controllers: [VerificacionPublicaController],
  providers: [VerificacionPublicaService],
})
export class VerificacionPublicaModule {}
