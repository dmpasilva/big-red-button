import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './services/app.service';
import { HeaderComponent } from './components/base/header/header.component';
import { GameAreaComponent } from './components/base/game-area/game-area.component';
import { MessageAreaComponent } from './components/base/message-area/message-area.component';
import { FooterComponent } from './components/base/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    GameAreaComponent,
    MessageAreaComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener('touchmove', (e: TouchEvent) => {
        const touchEvent = e as unknown as { scale?: number };
        if (touchEvent.scale !== 1) {
          e.preventDefault();
        }
      }, { passive: false });
    }

  }

  ngOnInit() {
  }
}
