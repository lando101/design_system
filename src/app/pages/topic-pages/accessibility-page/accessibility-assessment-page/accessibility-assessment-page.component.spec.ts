import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityAssessmentPageComponent } from './accessibility-assessment-page.component';

describe('AccessibilityAssessmentPageComponent', () => {
  let component: AccessibilityAssessmentPageComponent;
  let fixture: ComponentFixture<AccessibilityAssessmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityAssessmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityAssessmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
