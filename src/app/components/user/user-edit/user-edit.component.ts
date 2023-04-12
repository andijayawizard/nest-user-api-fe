import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  title:string='Edit User'
  details:any={}
  id:any
  constructor(private service:UserService,private route:ActivatedRoute){}
  ngOnInit():void{
    this.id=this.route.snapshot.params[this.id]
    this.getUser()
  }
  getUser():void{
    this.service.getUser(this.id).subscribe({
      next:(res:any)=>{
        this.details=res
      }
    })
  }
}
