import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { UserAddComponent } from '@components/user/user-add/user-add.component';
import { UserListComponent } from '@components/user/user-list/user-list.component';
import { UserDetailsComponent } from '@components/user/user-details/user-details.component';


@NgModule({
  declarations: [UserAddComponent,UserListComponent,UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports:[]
})
export class UserModule { }
