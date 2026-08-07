import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
})
export class ButtonComponent {
  buttonSize = input<ButtonSize>(ButtonSize.NORMAL);
  buttonColor = input<ButtonColor>(ButtonColor.DEFAULT);
  active = input<boolean>(false);
  isWhite = input<boolean>(false);
  hidden = input<boolean>(false);

  constructor(private appService: AppService) {}

  onClick() {
    if (this.active()) {
      this.appService.next();
    }

    if (this.isWhite()) {
      this.appService.whiteButton();
    }
  }
}
