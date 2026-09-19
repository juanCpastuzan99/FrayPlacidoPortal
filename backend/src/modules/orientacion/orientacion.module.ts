import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../firestore/firestore.module';
import { OrientacionController } from './orientacion.controller';
import { OrientacionService } from './orientacion.service';

@Module({
  imports: [FirebaseModule],
  controllers: [OrientacionController],
  providers: [OrientacionService],
  exports: [OrientacionService],
})
export class OrientacionModule {}
