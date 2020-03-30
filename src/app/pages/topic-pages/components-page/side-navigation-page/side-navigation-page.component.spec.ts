import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationPageComponent } from './side-navigation-page.component';

describe('SideNavigationPageComponent', () => {
  let component: SideNavigationPageComponent;
  let fixture: ComponentFixture<SideNavigationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
