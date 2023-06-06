import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonalWebComponent } from './card-personal-web.component';

describe('CardPersonalWebComponent', () => {
  let component: CardPersonalWebComponent;
  let fixture: ComponentFixture<CardPersonalWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonalWebComponent]
    });
    fixture = TestBed.createComponent(CardPersonalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
