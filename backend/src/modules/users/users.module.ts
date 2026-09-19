import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../firestore/firestore.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [FirebaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
