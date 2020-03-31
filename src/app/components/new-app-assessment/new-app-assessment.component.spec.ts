import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppAssessmentComponent } from './new-app-assessment.component';

describe('NewAppAssessmentComponent', () => {
  let component: NewAppAssessmentComponent;
  let fixture: ComponentFixture<NewAppAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
