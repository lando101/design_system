import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityReqPageComponent } from './accessibility-req-page.component';

describe('AccessibilityReqPageComponent', () => {
  let component: AccessibilityReqPageComponent;
  let fixture: ComponentFixture<AccessibilityReqPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityReqPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityReqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
