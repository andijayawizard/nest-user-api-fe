import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './components/articles-details/articles-details.component';
import { ArticlesAddComponent } from './components/articles-add/articles-add.component';
import { ArticlesEditComponent } from './components/articles-edit/articles-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesDetailsComponent,
    ArticlesAddComponent,
    ArticlesEditComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
