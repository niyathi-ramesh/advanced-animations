import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTransitionsComponent } from './pages/basic-transitions/basic-transitions.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, BasicTransitionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
