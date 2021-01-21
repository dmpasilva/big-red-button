import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/base/game-area/game-area.component';
import { MessageAreaComponent } from './components/base/message-area/message-area.component';
import { SingleButtonComponent } from './components/layouts/single-button/single-button.component';
import { ButtonComponent } from './components/base/button/button.component';
import { ThreeButtonsComponent } from './components/layouts/three-buttons/three-buttons.component';
import { MultipleButtonsComponent } from './components/layouts/multiple-buttons/multiple-buttons.component';
import { EvenMoreButtonsComponent } from './components/layouts/even-more-buttons/even-more-buttons.component';
import { FunkyButtonsComponent } from './components/layouts/funky-buttons/funky-buttons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/base/footer/footer.component';
import { HeaderComponent } from './components/base/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    MessageAreaComponent,
    SingleButtonComponent,
    ButtonComponent,
    ThreeButtonsComponent,
    MultipleButtonsComponent,
    EvenMoreButtonsComponent,
    FunkyButtonsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
