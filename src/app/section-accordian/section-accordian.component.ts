import { Component, OnInit } from '@angular/core';
import { SectionDetails } from '../shared/model/section-data.model';
import { SectionService } from '../shared/service/section.service';

@Component({
  selector: 'app-section-accordian',
  templateUrl: './section-accordian.component.html',
  styleUrls: ['./section-accordian.component.css']
})
export class SectionAccordianComponent implements OnInit{
  // data : any;
  secData : SectionDetails[] = [];
  constructor(private secServe : SectionService){}
  ngOnInit(): void {
    this.secServe.sectionSub.subscribe((param : any)=>{
      this.secData = param;
      console.log(this.secData)
    })
  }
}
