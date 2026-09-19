import { Module } from '@nestjs/common';
import { FirebaseModule } from '../firestore/firestore.module';
import { StorageService } from './storage.service';

@Module({
  imports: [FirebaseModule],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
