import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectExampleComponent } from './multi-select-example.component';

describe('MultiSelectExampleComponent', () => {
  let component: MultiSelectExampleComponent;
  let fixture: ComponentFixture<MultiSelectExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
