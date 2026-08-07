import { ChangeDetectionStrategy, Component, computed, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppService } from '../../../services/app.service';
import * as msgsEn from '../../../../assets/messages/en.json';
import * as msgsPt from '../../../../assets/messages/pt.json';

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
})
export class MessageAreaComponent {
  readonly isUpsideDown = computed(() => {
    const idx = this.appService.messageIdxSignal();
    return idx >= 58 && idx < 61;
  });

  readonly message = computed(() => {
    if (this.appService.whiteButtonClickedSignal()) {
      return this.appService.languageSignal() === 'pt'
        ? 'Yay! Encontraste-me!'
        : 'eek! You found me!';
    }
    const allMessages: string[] =
      this.appService.languageSignal() === 'pt'
        ? (msgsPt as unknown as { default: string[] }).default
        : (msgsEn as unknown as { default: string[] }).default;
    const idx = this.appService.messageIdxSignal();
    return allMessages[idx] || '';
  });

  constructor(private appService: AppService) {}
}
