import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskUsSearchComponent } from './ask-us-search.component';

describe('AskUsSearchComponent', () => {
  let component: AskUsSearchComponent;
  let fixture: ComponentFixture<AskUsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskUsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskUsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
