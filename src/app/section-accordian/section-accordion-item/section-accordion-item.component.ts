import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-accordion-item',
  templateUrl: './section-accordion-item.component.html',
  styleUrls: ['./section-accordion-item.component.css']
})
export class SectionAccordionItemComponent {
  @Input() sec : any;
}
