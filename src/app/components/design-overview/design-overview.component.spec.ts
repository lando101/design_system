import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOverviewComponent } from './design-overview.component';

describe('DesignOverviewComponent', () => {
  let component: DesignOverviewComponent;
  let fixture: ComponentFixture<DesignOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
