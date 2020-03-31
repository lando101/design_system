import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityOverviewPageComponent } from './accessibility-overview-page.component';

describe('AccessibilityOverviewPageComponent', () => {
  let component: AccessibilityOverviewPageComponent;
  let fixture: ComponentFixture<AccessibilityOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
