import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../firestore/firestore.module';
import { TracerController } from './tracer.controller';
import { TracerService } from './tracer.service';

@Module({
  imports: [FirebaseModule],
  controllers: [TracerController],
  providers: [TracerService],
  exports: [TracerService],
})
export class TracerModule {}
