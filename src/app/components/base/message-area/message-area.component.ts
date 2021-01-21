import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../../services/app.service';
import * as msgs from '../../../../assets/messages/en.json'
import * as msgsPt from '../../../../assets/messages/pt.json'

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessageAreaComponent implements OnInit, OnDestroy {
  private allMessages: any[] = (msgs as any).default;
  private subscriptions = [];
  private messageIdx = 0;
  message = this.allMessages[this.messageIdx];
  private easterEggMessage = 'eek! You found me!';
  isUpsideDown = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.appService.onNext()
        .subscribe(() => {
          this.nextMessage();
        }),
      this.appService.onWhiteButton()
        .subscribe(() => {
          this.whiteButtonMessage();
        }),
      this.appService.onLanguageChange()
        .subscribe((lang) => this.changeLanguage(lang))
    );
  }

  changeLanguage(lang) {
    if (lang === 'pt') {
      this.allMessages = (msgsPt as any).default;
      this.easterEggMessage = 'Yay! Encontraste-me!';
    } else {
      this.allMessages = (msgs as any).default;
      this.easterEggMessage = 'eek! You found me!';
    }
    this.messageIdx = 0;
    this.message = this.allMessages[this.messageIdx];
    this.isUpsideDown = false;
  }

  whiteButtonMessage() {
    this.message = this.easterEggMessage;
  }

  nextMessage() {
    this.messageIdx += 1;
    if (this.messageIdx >= this.allMessages.length) {
      this.messageIdx = 0;
    }
    switch (this.messageIdx) {
      case 58:
        this.isUpsideDown = true;
        break;
      case 61:
        this.isUpsideDown = false;
        break;
    }
    this.message = this.allMessages[this.messageIdx];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
