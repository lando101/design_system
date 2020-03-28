import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationPageComponent } from './foundation-page.component';

describe('FoundationPageComponent', () => {
  let component: FoundationPageComponent;
  let fixture: ComponentFixture<FoundationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
