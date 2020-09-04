import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeSearchComponent } from './font-awesome-search.component';

describe('FontAwesomeSearchComponent', () => {
  let component: FontAwesomeSearchComponent;
  let fixture: ComponentFixture<FontAwesomeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
