import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize } from '../../../common/button-size';
import { ButtonColor } from '../../../common/button-color';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  buttonSize = ButtonSize.NORMAL;
  @Input()
  buttonColor = ButtonColor.DEFAULT;
  @Input()
  active = false;
  @Input()
  isWhite = false;
  @Input()
  hidden = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.active) {
      this.appService.next();
    }

    if (this.isWhite) {
      this.appService.whiteButton();
    }
  }

}
