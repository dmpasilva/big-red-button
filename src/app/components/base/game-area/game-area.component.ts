import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import * as msgs from '../../../../assets/messages/en.json';
import { Screens } from './screens';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameAreaComponent implements OnInit, OnDestroy {
  private subscriptions = [];
  private allMessages: any[] = (msgs as any).default;

  sizes = ButtonSize;
  colors = ButtonColor;
  showWhiteButton = false;
  whiteButtonClicked = false;
  buttonColor = ButtonColor.DEFAULT;

  currentIdx = 0;
  screen = Screens.SINGLE;
  screens = Screens;

  // for animation
  animate = false;
  // for three buttons stages
  threeColors = false;
  // for multiple buttons
  activeIdx = 0;
  buttonSize = ButtonSize.NORMAL;
  hidden = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.appService.onNext()
        .subscribe(() => this.onNext()),
      this.appService.onWhiteButton()
        .subscribe(() => {
          this.onWhiteButtonClick();
        }),
      this.appService.onLanguageChange()
        .subscribe(() => this.reset())
    );
  }

  onNext() {
    this.currentIdx += 1;
    if (this.currentIdx >= this.allMessages.length) {
      this.reset();
    }
    switch (this.currentIdx) {
      case 11:
        this.buttonSize = ButtonSize.SMALL;
        break;
      case 12:
        this.buttonSize = ButtonSize.NORMAL;
        break;
      case 13:
        this.buttonColor = ButtonColor.PENGUIN;
        break;
      case 14:
        this.buttonColor = ButtonColor.DEFAULT;
        break;
      case 17:
        this.screen = Screens.THREE_BUTTONS;
        this.activeIdx = 2;
        break;
      case 18:
        this.screen = Screens.SINGLE;
        break;
      case 19:
        this.screen = Screens.MULTIPLE_BUTTONS;
        break;
      case 20:
        this.screen = Screens.EVEN_MORE_BUTTONS;
        break;
      case 21:
        this.screen = Screens.SINGLE;
        break;
      case 32:
        this.screen = Screens.THREE_BUTTONS;
        this.threeColors = true;
        this.activeIdx = 1;
        break;
      case 33:
        this.activeIdx = 2;
        break;
      case 35:
        this.screen = Screens.SINGLE;
        this.threeColors = false;
        this.activeIdx = 0;
        break;
      case 62:
        this.showWhiteButton = true;
        break;
      case 72:
        this.animate = true;
        break;
      case 73:
        this.animate = false;
        break;
      case 74:
        this.screen = Screens.FUNKY_BUTTONS;
        break;
      case 75:
        this.screen = Screens.SINGLE;
        break;
      case 116:
        this.hidden = true;
        this.buttonSize = ButtonSize.TINNY;
        break;
      case 117:
        this.hidden = false;
        this.buttonSize = ButtonSize.NORMAL;
        break;
      default:
        break;
    }
  }

  reset() {
    this.currentIdx = 0;
    this.screen = Screens.SINGLE;
    this.animate = false;
    this.threeColors = false;
    this.activeIdx = 1;
    this.showWhiteButton = false;
    this.buttonSize = ButtonSize.NORMAL;
    this.buttonColor = ButtonColor.DEFAULT;
    this.hidden = false;
  }

  onWhiteButtonClick() {
    this.whiteButtonClicked = true;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

}
