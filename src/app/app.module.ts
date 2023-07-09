import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { SectionAccordianComponent } from './section-accordian/section-accordian.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionAccordionItemComponent } from './section-accordian/section-accordion-item/section-accordion-item.component';
import { SectionService } from './shared/service/section.service';
import { AddmoduleModule } from './addmodule/addmodule.module';
@NgModule({
  declarations: [
    AppComponent,
    SectionFormComponent,
    SectionAccordianComponent,
    SectionAccordionItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AddmoduleModule
  ],
  providers: [
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
