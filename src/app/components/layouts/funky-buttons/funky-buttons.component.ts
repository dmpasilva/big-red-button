import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';

@Component({
  selector: 'app-funky-buttons',
  templateUrl: './funky-buttons.component.html',
  styleUrls: ['./funky-buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FunkyButtonsComponent implements OnInit {
  sizes = ButtonSize;
  numbers = [];

  constructor() {
    this.numbers = Array(16).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

}
