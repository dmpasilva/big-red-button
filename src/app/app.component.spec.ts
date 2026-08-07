import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [AppService]
    }).compileComponents();
  });

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render header and game area elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-game-area')).toBeTruthy();
    expect(compiled.querySelector('app-message-area')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should update header title when language changes signal updates', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(AppService);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const headerTitle = compiled.querySelector('app-header h1');
    expect(headerTitle?.textContent?.trim()).toBe('The Big Red Button');

    service.changeLanguage('pt');
    fixture.detectChanges();
    expect(headerTitle?.textContent?.trim()).toBe('O Grande Botão Vermelho');
  });
});
