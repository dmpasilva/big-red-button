import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ButtonComponent]
})
export class SingleButtonComponent {
  animate = input<boolean>(false);
  size = input<ButtonSize>(ButtonSize.NORMAL);
  penguin = input<boolean>(false);
  hidden = input<boolean>(false);
  color = input<ButtonColor>(ButtonColor.DEFAULT);
}
