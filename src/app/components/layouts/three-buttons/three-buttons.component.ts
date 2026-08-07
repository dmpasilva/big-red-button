import { Component, input } from '@angular/core';
import { ButtonColor } from '../../../common/button-color';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-three-buttons',
  templateUrl: './three-buttons.component.html',
  styleUrls: ['./three-buttons.component.scss'],
  imports: [ButtonComponent]
})
export class ThreeButtonsComponent {
  activeIdx = input<number>(0);
  threeColors = input<boolean>(false);
  colors = ButtonColor;
}
