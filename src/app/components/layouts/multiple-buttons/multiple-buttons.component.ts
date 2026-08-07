import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-multiple-buttons',
  templateUrl: './multiple-buttons.component.html',
  styleUrls: ['./multiple-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent]
})
export class MultipleButtonsComponent implements OnInit {
  mediumSize = ButtonSize.MEDIUM;

  constructor() {}

  ngOnInit(): void {}
}
