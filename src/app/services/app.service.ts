import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import * as msgs from '../../assets/messages/en.json';

@Injectable({ providedIn: 'root' })
export class AppService {
  private allMessages: string[] = (msgs as unknown as { default: string[] }).default;
  
  // Signals
  readonly languageSignal = signal<string>('en');
  readonly messageIdxSignal = signal<number>(0);
  readonly whiteButtonClickedSignal = signal<boolean>(false);

  private _next = new Subject<void>();
  private _whiteButton = new Subject<void>();
  private _language = new Subject<string>();

  next() {
    const nextIdx = (this.messageIdxSignal() + 1) % this.allMessages.length;
    this.messageIdxSignal.set(nextIdx);
    this._next.next();
  }

  whiteButton() {
    this.whiteButtonClickedSignal.set(true);
    this._whiteButton.next();
  }

  changeLanguage(lang: string) {
    this.languageSignal.set(lang);
    this.messageIdxSignal.set(0);
    this.whiteButtonClickedSignal.set(false);
    this._language.next(lang);
  }

  reset() {
    this.messageIdxSignal.set(0);
    this.whiteButtonClickedSignal.set(false);
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
