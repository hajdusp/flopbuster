import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlingCardsComponent } from './event-handling-cards.component';

describe('EventHandlingCardsComponent', () => {
  let component: EventHandlingCardsComponent;
  let fixture: ComponentFixture<EventHandlingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHandlingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandlingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
