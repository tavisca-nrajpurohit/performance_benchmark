import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTextareaComponent } from './ng-textarea.component';

describe('NgTextareaComponent', () => {
  let component: NgTextareaComponent;
  let fixture: ComponentFixture<NgTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
