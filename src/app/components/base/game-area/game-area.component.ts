import { Component, effect, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import { Screens } from './screens';
import { ButtonComponent } from '../button/button.component';
import { SingleButtonComponent } from '../../layouts/single-button/single-button.component';
import { ThreeButtonsComponent } from '../../layouts/three-buttons/three-buttons.component';
import { MultipleButtonsComponent } from '../../layouts/multiple-buttons/multiple-buttons.component';
import { EvenMoreButtonsComponent } from '../../layouts/even-more-buttons/even-more-buttons.component';
import { FunkyButtonsComponent } from '../../layouts/funky-buttons/funky-buttons.component';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    ButtonComponent,
    SingleButtonComponent,
    ThreeButtonsComponent,
    MultipleButtonsComponent,
    EvenMoreButtonsComponent,
    FunkyButtonsComponent
  ]
})
export class GameAreaComponent {
  sizes = ButtonSize;
  colors = ButtonColor;
  showWhiteButton = false;
  buttonColor = ButtonColor.DEFAULT;

  screen = Screens.SINGLE;
  screens = Screens;

  animate = false;
  threeColors = false;
  activeIdx = 0;
  buttonSize = ButtonSize.NORMAL;
  hidden = false;

  get whiteButtonClicked() {
    return this.appService.whiteButtonClickedSignal();
  }

  constructor(public appService: AppService) {
    effect(() => {
      const currentIdx = this.appService.messageIdxSignal();
      this.updateStateForIndex(currentIdx);
    });
  }

  updateStateForIndex(currentIdx: number) {
    if (currentIdx === 0) {
      this.resetState();
      return;
    }
    switch (currentIdx) {
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

  resetState() {
    this.screen = Screens.SINGLE;
    this.animate = false;
    this.threeColors = false;
    this.activeIdx = 1;
    this.showWhiteButton = false;
    this.buttonSize = ButtonSize.NORMAL;
    this.buttonColor = ButtonColor.DEFAULT;
    this.hidden = false;
  }
}
