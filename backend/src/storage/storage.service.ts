import { Injectable } from '@nestjs/common';
import { Storage, Bucket } from 'firebase-admin/storage';

@Injectable()
export class StorageService {
  private bucket: Bucket;
  constructor(storage: Storage) { this.bucket = storage.bucket(); }

  async uploadFile(path: string, buffer: Buffer, contentType: string): Promise<string> {
    const file = this.bucket.file(path);
    await file.save(buffer, { metadata: { contentType } });
    return `gs://${this.bucket.name}/${path}`;
  }

  async getSignedUrl(path: string, action: 'read' | 'write' = 'read', expiresIn = 900): Promise<string> {
    const file = this.bucket.file(path);
    const [url] = await file.getSignedUrl({ action, expires: new Date(Date.now() + expiresIn * 1000) });
    return url;
  }
}
