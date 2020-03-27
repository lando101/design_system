import { TestBed } from '@angular/core/testing';

import { AccessibilityComplianceService } from './accessibility-compliance-data.service';

describe('508TestService', () => {
  let service: AccessibilityComplianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessibilityComplianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
