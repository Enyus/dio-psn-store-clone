import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CardComponent } from './components/card/card.component';
import { HeaderSecaoComponent } from './components/app-header/header-secao/header-secao.component';
import { HeaderNavComponent } from './components/app-header/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CardComponent,
    HeaderSecaoComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
