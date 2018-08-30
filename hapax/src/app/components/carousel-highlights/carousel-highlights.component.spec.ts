import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHighlightsComponent } from './carousel-highlights.component';

describe('CarouselHighlightsComponent', () => {
  let component: CarouselHighlightsComponent;
  let fixture: ComponentFixture<CarouselHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
