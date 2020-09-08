import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavExampleComponent } from './side-nav-example.component';

describe('SideNavExampleComponent', () => {
  let component: SideNavExampleComponent;
  let fixture: ComponentFixture<SideNavExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
