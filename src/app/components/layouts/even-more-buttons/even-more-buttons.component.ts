import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-even-more-buttons',
  templateUrl: './even-more-buttons.component.html',
  styleUrls: ['./even-more-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent]
})
export class EvenMoreButtonsComponent implements OnInit {

  buttonSize = ButtonSize.SMALL;

  constructor() { }

  ngOnInit(): void {
  }

}
