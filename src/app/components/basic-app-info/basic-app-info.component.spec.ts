import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAppInfoComponent } from './basic-app-info.component';

describe('BasicAppInfoComponent', () => {
  let component: BasicAppInfoComponent;
  let fixture: ComponentFixture<BasicAppInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAppInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAppInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
