import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as msgs from '../../assets/messages/en.json';

@Injectable({ providedIn: 'root' })
export class AppService {
  private allMessages: any[] = (msgs as any).default;
  private _next = new Subject();
  private _whiteButton = new Subject();
  private _language = new Subject();
  private messageIdx = 0;

  next() {
    this.messageIdx += 1;
    if (this.messageIdx >= this.allMessages.length) {
      this.messageIdx = 0;
    }
    this._next.next();
  }

  whiteButton() {
    this._whiteButton.next();
  }

  changeLanguage(lang: string) {
    this._language.next(lang);
  }

  onNext() {
    return this._next.asObservable();
  }

  onLanguageChange() {
    return this._language.asObservable();
  }

  onWhiteButton() {
    return this._whiteButton.asObservable();
  }
}
