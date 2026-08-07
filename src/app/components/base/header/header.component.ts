import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly title = computed(() => {
    return this.appService.languageSignal() === 'pt'
      ? 'O Grande Botão Vermelho'
      : 'The Big Red Button';
  });

  constructor(private appService: AppService) {}

  changeLanguage(lang: string) {
    this.appService.changeLanguage(lang);
  }
}
