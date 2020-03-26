import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityComplianceAssessmentComponent } from './accessibility-compliance-assessment.component';

describe('AccessibilityComplianceAssessmentComponent', () => {
  let component: AccessibilityComplianceAssessmentComponent;
  let fixture: ComponentFixture<AccessibilityComplianceAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityComplianceAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityComplianceAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
