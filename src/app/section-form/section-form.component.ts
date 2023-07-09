import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionService } from '../shared/service/section.service';
import { SectionDetails } from '../shared/model/section-data.model';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit{
  sectionForm : any;
  constructor(private secServe : SectionService){}
  ngOnInit(): void {
    this.sectionForm = new FormGroup({
      secHeader : new FormControl('', Validators.required),
      secDetails : new FormControl('', [Validators.required, Validators.minLength(50)])
    })
  }
  onSubmit(){
    let sec = this.sectionForm.value;
    let sectionObj = new SectionDetails(sec.secHeader,sec.secDetails)
    console.log(sec);
    this.secServe.addNewSection(sectionObj)
    this.sectionForm.reset();
  }
}
