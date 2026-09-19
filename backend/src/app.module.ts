import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TracerModule } from './modules/tracer/tracer.module';
import { OrientacionModule } from './modules/orientacion/orientacion.module';
import { DocumentosModule } from './modules/documentos/documentos.module';
import { ReportesModule } from './modules/reportes/reportes.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';
import { AuditoriaModule } from './modules/auditoria/auditoria.module';
import { VerificacionPublicaModule } from './modules/verificacion-publica/verificacion-publica.module';
import { FirebaseModule } from './firestore/firestore.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: parseInt(process.env.THROTTLE_TTL || '60000', 10), limit: parseInt(process.env.THROTTLE_LIMIT || '5', 10) }]),
    FirebaseModule,
    StorageModule,
    AuthModule, UsersModule, TracerModule, OrientacionModule,
    DocumentosModule, ReportesModule, NotificacionesModule, AuditoriaModule, VerificacionPublicaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
