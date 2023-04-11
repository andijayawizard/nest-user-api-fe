/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { User } from '@/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  userForm:FormGroup
  title:string='add new user'
  user:User={
    firstName: '',
    lastName: '',
  }
  submitted:boolean=false
  constructor(private service:UserService,private router:Router,private fb:FormBuilder){}
  ngOnInit():void{
    this.userForm=this.fb.group({
      firstName:[''],
      lastName:['']
    })
  }
  storeUser():void{
    const data={
      firstName:this.user.firstName,
      lastName:this.user.lastName
    }
    this.service.createUser(this.userForm.value).subscribe({
      next:(res:any)=>{
        console.log('insert success')
        this.router.navigateByUrl('/user')
        // this.submitted=true
        // this.router.navigate(['/user'])
      },
      // error:(e)=>{console.error(e)}
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
