import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiodataRoutingModule } from './biodata-routing.module';
import { BiodataListComponent } from './components/biodata-list/biodata-list.component';
import { BiodataDetailsComponent } from './components/biodata-details/biodata-details.component';
import { BiodataAddComponent } from './components/biodata-add/biodata-add.component';
import { BiodataEditComponent } from './components/biodata-edit/biodata-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BiodataListComponent,
    BiodataDetailsComponent,
    BiodataAddComponent,
    BiodataEditComponent
  ],
  imports: [
    CommonModule,
    BiodataRoutingModule,ReactiveFormsModule
  ],
  exports:[
    BiodataListComponent,BiodataDetailsComponent,BiodataAddComponent,BiodataEditComponent
  ]
})
export class BiodataModule { }
