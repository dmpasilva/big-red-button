import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener('touchmove', (e: any) => {
        if (e.scale !== 1) {
          e.preventDefault();
        }
      }, { passive: false });
    }

  }

  ngOnInit() {
    /*setInterval(() => {
      this.appService.next();
    }, 1000);*/
  }
}
