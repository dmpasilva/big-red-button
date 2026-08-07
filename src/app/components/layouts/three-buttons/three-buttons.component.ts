import { Component, Input, OnInit } from '@angular/core';
import { ButtonColor } from '../../../common/button-color';

@Component({
  selector: 'app-three-buttons',
  templateUrl: './three-buttons.component.html',
  styleUrls: ['./three-buttons.component.scss'],
  standalone: false
})
export class ThreeButtonsComponent implements OnInit {
  @Input()
  activeIdx = 0;
  @Input()
  threeColors = false;
  colors = ButtonColor;

  constructor() { }

  ngOnInit(): void {
  }

}
