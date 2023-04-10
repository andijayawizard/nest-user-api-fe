/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  title:string='User Details'
  id:any
  details:any={}
  constructor(private service:UserService,private route:ActivatedRoute,private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id']
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
