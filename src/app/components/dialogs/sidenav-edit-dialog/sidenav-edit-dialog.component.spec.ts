import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEditDialogComponent } from './sidenav-edit-dialog.component';

describe('SidenavEditDialogComponent', () => {
  let component: SidenavEditDialogComponent;
  let fixture: ComponentFixture<SidenavEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
