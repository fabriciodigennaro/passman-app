import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Pass } from '../models/pass.model';
import { CryptoService } from './crypto.service';

const STORAGE_KEY = 'passwords';

@Injectable({ providedIn: 'root' })
export class PassStorageService {
  constructor(private crypto: CryptoService) {}

  async getAll(): Promise<Pass[]> {
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    if (!value) return [];

    const decrypted = this.crypto.decrypt(value);
    return JSON.parse(decrypted);
  }

  async save(pass: Pass): Promise<void> {
    const list = await this.getAll();
    list.push(pass);

    const encrypted = this.crypto.encrypt(JSON.stringify(list));

    await Preferences.set({
      key: STORAGE_KEY,
      value: encrypted,
    });
  }
}
