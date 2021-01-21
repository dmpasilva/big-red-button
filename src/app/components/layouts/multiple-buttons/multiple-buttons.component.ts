import { Component, OnInit } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';

@Component({
  selector: 'app-multiple-buttons',
  templateUrl: './multiple-buttons.component.html',
  styleUrls: ['./multiple-buttons.component.scss']
})
export class MultipleButtonsComponent implements OnInit {

  mediumSize = ButtonSize.MEDIUM;

  constructor() { }

  ngOnInit(): void {
  }

}
