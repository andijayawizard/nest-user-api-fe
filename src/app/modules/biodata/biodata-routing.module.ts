import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataListComponent } from './components/biodata-list/biodata-list.component';
import { MainComponent } from '@modules/main/main.component';
import { AuthGuard } from '@guards/auth.guard';
import { BiodataAddComponent } from './components/biodata-add/biodata-add.component';
import { BiodataDetailsComponent } from './components/biodata-details/biodata-details.component';
import { BiodataEditComponent } from './components/biodata-edit/biodata-edit.component';

const routes: Routes = [
  {path:'',component:MainComponent,canActivate:[AuthGuard],canActivateChild:[AuthGuard],children:[
    {path:'biodata/add',component:BiodataAddComponent},
    {path:'biodata',component:BiodataListComponent},
    {path:'biodata/:id',component:BiodataDetailsComponent},
    {path:'biodata/edit/:id',component:BiodataEditComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiodataRoutingModule { }
