import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleButtonComponent implements OnInit {

  @Input()
  animate = false;
  @Input()
  size = ButtonSize.NORMAL;
  @Input()
  penguin = false;
  @Input()
  hidden = false;
  @Input()
  color = ButtonColor.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
