import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesSectionComponent } from './particles-section.component';

describe('ParticlesSectionComponent', () => {
  let component: ParticlesSectionComponent;
  let fixture: ComponentFixture<ParticlesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
