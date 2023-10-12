import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycategoryComponent } from './displaycategory.component';

describe('DisplaycategoryComponent', () => {
  let component: DisplaycategoryComponent;
  let fixture: ComponentFixture<DisplaycategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycategoryComponent]
    });
    fixture = TestBed.createComponent(DisplaycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
