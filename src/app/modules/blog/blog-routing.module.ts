import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  {path:'',component:MainComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children:[
    {path:'blog',component:ListComponent},
    {path:'blog/:id',component:DetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
