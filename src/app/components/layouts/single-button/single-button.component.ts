import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import { ButtonComponent } from '../../base/button/button.component';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgClass, ButtonComponent]
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
