import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from '@components/user/user-add/user-add.component';
import { UserDetailsComponent } from '@components/user/user-details/user-details.component';
import { UserEditComponent } from '@components/user/user-edit/user-edit.component';
import { UserListComponent } from '@components/user/user-list/user-list.component';
import { AuthGuard } from '@guards/auth.guard';
import { MainComponent } from '@modules/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent, canActivate:[AuthGuard],canActivateChild:[AuthGuard], children:[
    {path: 'user', component: UserListComponent},
    {path:'user/add',component:UserAddComponent},
    {path:'user/:id',component:UserDetailsComponent},
    {path:'user/edit/:id',component:UserEditComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
