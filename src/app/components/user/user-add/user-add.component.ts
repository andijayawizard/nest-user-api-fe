/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { User } from '@/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  title:string='add new user'
  user:User={
    firstName: '',
    lastName: '',
  }
  submitted:boolean=false
  constructor(private service:UserService){}
  ngOnInit():void{}
  storeUser():void{
    const data={
      firstName:this.user.firstName,
      lastName:this.user.lastName
    }
    this.service.createUser(data).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.submitted=true
      },
      error:(e)=>{console.error(e)}
    })
  }
  newUser():void{
    this.submitted=false
    this.user={
      firstName:'',
      lastName:''
    }
  }
}
