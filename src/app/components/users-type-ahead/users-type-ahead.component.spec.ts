import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTypeAheadComponent } from './users-type-ahead.component';

describe('UsersTypeAheadComponent', () => {
  let component: UsersTypeAheadComponent;
  let fixture: ComponentFixture<UsersTypeAheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTypeAheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
