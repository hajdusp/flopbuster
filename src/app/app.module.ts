import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventHandlingBasicsComponent } from './event-handling-basics/event-handling-basics.component';
import { EventHandlingCardsComponent } from './event-handling-cards/event-handling-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHandlingBasicsComponent,
    EventHandlingCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
