/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { User } from '@/interfaces/user';
import { Component } from '@angular/core';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  title:string='Users'
  data:User[]=[]
  constructor(private service:UserService){}
  ngOnInit():void{
    this.getUsers()
  }
  getUsers():void{
    this.service.getUsers().subscribe({
      next:(res:any)=>{
        this.data=res.data
      }
    })
  }
  destroy(id:string):void{
    this.service.deleteUser(id).subscribe({
      next:()=>{
        console.log('delete success')
      }
    })
  }

}
