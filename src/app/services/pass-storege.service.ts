import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Pass } from '../models/pass.model';

const STORAGE_KEY = 'passwords';

@Injectable({
  providedIn: 'root',
})
export class PassStorageService {
  async getAll(): Promise<Pass[]> {
    const { value } = await Preferences.get({ key: STORAGE_KEY });
    return value ? JSON.parse(value) : [];
  }

  async save(pass: Pass): Promise<void> {
    const list = await this.getAll();
    list.push(pass);
    await Preferences.set({
      key: STORAGE_KEY,
      value: JSON.stringify(list),
    });
  }

  async getById(id: string): Promise<Pass | undefined> {
    const list = await this.getAll();
    return list.find((p) => p.id === id);
  }
}
