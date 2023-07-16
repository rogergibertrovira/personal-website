import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWeatherWebComponent } from './card-weather-web.component';

describe('CardWeatherWebComponent', () => {
  let component: CardWeatherWebComponent;
  let fixture: ComponentFixture<CardWeatherWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWeatherWebComponent]
    });
    fixture = TestBed.createComponent(CardWeatherWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
