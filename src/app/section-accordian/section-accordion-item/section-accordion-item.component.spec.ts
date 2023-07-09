import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccordionItemComponent } from './section-accordion-item.component';

describe('SectionAccordionItemComponent', () => {
  let component: SectionAccordionItemComponent;
  let fixture: ComponentFixture<SectionAccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAccordionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
