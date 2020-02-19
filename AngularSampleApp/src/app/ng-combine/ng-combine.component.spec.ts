import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCombineComponent } from './ng-combine.component';

describe('NgCombineComponent', () => {
  let component: NgCombineComponent;
  let fixture: ComponentFixture<NgCombineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCombineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
