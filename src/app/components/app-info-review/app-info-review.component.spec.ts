import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfoReviewComponent } from './app-info-review.component';

describe('AppInfoReviewComponent', () => {
  let component: AppInfoReviewComponent;
  let fixture: ComponentFixture<AppInfoReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInfoReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInfoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
