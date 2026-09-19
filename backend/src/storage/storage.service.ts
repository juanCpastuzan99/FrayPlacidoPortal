import { Injectable } from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';

@Injectable()
export class StorageService {
  constructor() {}

  async uploadFile(path: string, buffer: Buffer, contentType: string): Promise<string> {
    const storage = getStorage();
    const file = storage.bucket().file(path);
    await file.save(buffer, { metadata: { contentType } });
    return `gs://${storage.bucket().name}/${path}`;
  }

  async getSignedUrl(path: string, expiresIn = 900): Promise<string> {
    const storage = getStorage();
    const file = storage.bucket().file(path);
    const [url] = await file.getSignedUrl({ action: 'read', expires: new Date(Date.now() + expiresIn * 1000) });
    return url;
  }
}
