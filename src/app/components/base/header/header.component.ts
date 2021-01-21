import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions = [];
  title = 'The Big Red Button';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.appService.onLanguageChange()
        .subscribe(lang => this.languageChanged(lang))
    );
  }

  changeLanguage(lang) {
    this.appService.changeLanguage(lang);
  }

  languageChanged(lang) {
    switch (lang) {
      case 'pt':
        this.title = 'O Grande Botão Vermelho';
        break;
      default:
        this.title = 'The Big Red Button';
        break;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
