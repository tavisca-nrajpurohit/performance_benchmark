import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDropdownComponent } from './ng-dropdown.component';

describe('NgDropdownComponent', () => {
  let component: NgDropdownComponent;
  let fixture: ComponentFixture<NgDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
