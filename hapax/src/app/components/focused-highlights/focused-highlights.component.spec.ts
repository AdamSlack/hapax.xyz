import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedHighlightsComponent } from './focused-highlights.component';

describe('FocusedHighlightsComponent', () => {
  let component: FocusedHighlightsComponent;
  let fixture: ComponentFixture<FocusedHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusedHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
