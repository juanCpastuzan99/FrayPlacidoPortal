import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'FIREBASE_ADMIN_APP',
      useFactory: (config: ConfigService) => {
        if (getApps().length === 0) {
          const serviceAccount = {
            projectId: config.get('FIREBASE_PROJECT_ID'),
            privateKey: config.get('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n'),
            clientEmail: config.get('FIREBASE_CLIENT_EMAIL'),
          };
          return initializeApp({ credential: cert(serviceAccount as any), storageBucket: config.get('STORAGE_BUCKET') });
        }
        return getApp();
      },
      inject: [ConfigService],
    },
    {
      provide: 'FIRESTORE_ADMIN',
      useFactory: (app: ReturnType<typeof getApp>) => getFirestore(app),
      inject: ['FIREBASE_ADMIN_APP'],
    },
    {
      provide: 'STORAGE_ADMIN',
      useFactory: (app: ReturnType<typeof getApp>) => getStorage(app),
      inject: ['FIREBASE_ADMIN_APP'],
    },
  ],
  exports: ['FIREBASE_ADMIN_APP', 'FIRESTORE_ADMIN', 'STORAGE_ADMIN'],
})
export class FirebaseModule {}
