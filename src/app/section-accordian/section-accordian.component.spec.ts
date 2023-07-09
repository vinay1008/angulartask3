import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccordianComponent } from './section-accordian.component';

describe('SectionAccordianComponent', () => {
  let component: SectionAccordianComponent;
  let fixture: ComponentFixture<SectionAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAccordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
