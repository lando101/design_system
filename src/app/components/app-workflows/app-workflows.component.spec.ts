import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWorkflowsComponent } from './app-workflows.component';

describe('AppWorkflowsComponent', () => {
  let component: AppWorkflowsComponent;
  let fixture: ComponentFixture<AppWorkflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWorkflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWorkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
