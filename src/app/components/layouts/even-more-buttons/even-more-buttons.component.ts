import { Component, OnInit } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';

@Component({
  selector: 'app-even-more-buttons',
  templateUrl: './even-more-buttons.component.html',
  styleUrls: ['./even-more-buttons.component.scss']
})
export class EvenMoreButtonsComponent implements OnInit {

  buttonSize = ButtonSize.SMALL;

  constructor() { }

  ngOnInit(): void {
  }

}
