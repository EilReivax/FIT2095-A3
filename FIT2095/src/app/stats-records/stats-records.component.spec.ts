import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsRecordsComponent } from './stats-records.component';

describe('StatsRecordsComponent', () => {
  let component: StatsRecordsComponent;
  let fixture: ComponentFixture<StatsRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsRecordsComponent]
    });
    fixture = TestBed.createComponent(StatsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
