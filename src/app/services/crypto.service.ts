import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const SECRET = 'CHANGE_THIS_SECRET_KEY';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, SECRET).toString();
  }

  decrypt(data: string): string {
    const bytes = CryptoJS.AES.decrypt(data, SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
