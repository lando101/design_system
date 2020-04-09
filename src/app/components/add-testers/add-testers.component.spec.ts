import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestersComponent } from './add-testers.component';

describe('AddTestersComponent', () => {
  let component: AddTestersComponent;
  let fixture: ComponentFixture<AddTestersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
