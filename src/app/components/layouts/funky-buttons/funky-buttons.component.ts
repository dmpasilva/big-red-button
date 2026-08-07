import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-funky-buttons',
  templateUrl: './funky-buttons.component.html',
  styleUrls: ['./funky-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonComponent]
})
export class FunkyButtonsComponent implements OnInit {
  sizes = ButtonSize;
  numbers: number[] = [];

  constructor() {
    this.numbers = Array(16).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

}
