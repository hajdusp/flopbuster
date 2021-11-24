import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling-basics',
  templateUrl: './event-handling-basics.component.html',
  styleUrls: ['./event-handling-basics.component.css']
})
export class EventHandlingBasicsComponent {

  constructor() { }

  clickedText = "nothing clicked yet";

  myMovie = {
    title: "Saving Private Ryan",
    release: 1998,
    rating: 8.6,
    imdbLink: "https://www.imdb.com/title/tt0120815/",
  }

  alertElemName(event:any) {
    console.log("the clicked element is: " + event.target.innerText);
    this.clickedText = "the clicked element is: " + event.target.innerText;
    event.stop;
  }

}
