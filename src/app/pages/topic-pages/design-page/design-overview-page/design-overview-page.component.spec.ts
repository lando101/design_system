import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOverviewPageComponent } from './design-overview-page.component';

describe('DesignOverviewPageComponent', () => {
  let component: DesignOverviewPageComponent;
  let fixture: ComponentFixture<DesignOverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
