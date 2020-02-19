import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCheckboxComponent } from './ng-checkbox.component';

describe('NgCheckboxComponent', () => {
  let component: NgCheckboxComponent;
  let fixture: ComponentFixture<NgCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
