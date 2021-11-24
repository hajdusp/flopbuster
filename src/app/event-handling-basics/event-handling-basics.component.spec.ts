import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlingBasicsComponent } from './event-handling-basics.component';

describe('EventHandlingBasicsComponent', () => {
  let component: EventHandlingBasicsComponent;
  let fixture: ComponentFixture<EventHandlingBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventHandlingBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandlingBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
