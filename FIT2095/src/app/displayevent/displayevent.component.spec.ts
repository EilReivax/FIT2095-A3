import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayeventComponent } from './displayevent.component';

describe('DisplayeventComponent', () => {
  let component: DisplayeventComponent;
  let fixture: ComponentFixture<DisplayeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayeventComponent]
    });
    fixture = TestBed.createComponent(DisplayeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
