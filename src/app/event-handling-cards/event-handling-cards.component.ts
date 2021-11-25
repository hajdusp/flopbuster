import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling-cards',
  templateUrl: './event-handling-cards.component.html',
  styleUrls: ['./event-handling-cards.component.css']
})
export class EventHandlingCardsComponent {
  selectedIndex: number = -1;

  voteFor(index: number) {
    return this.selectedIndex = index;
  }
}
