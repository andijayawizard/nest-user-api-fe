import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesAddComponent } from './components/articles-add/articles-add.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './components/articles-details/articles-details.component';
import { ArticlesEditComponent } from './components/articles-edit/articles-edit.component';
import { MainComponent } from '@modules/main/main.component';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  {path:'', component:MainComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children:[
    {path:'articles/add',component:ArticlesAddComponent},
    {path:'articles',component:ArticlesListComponent},
    {path:'articles/:id',component:ArticlesDetailsComponent},
    {path:'articles/edit/:id',component:ArticlesEditComponent},  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
