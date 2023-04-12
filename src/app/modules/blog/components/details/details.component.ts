import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@modules/blog/blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  title:string='Blog'
  details:any
  id:string
  constructor(private service:BlogService,private route:ActivatedRoute){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id']
    this.findOne()
  }
  findOne():void{
    // const id:string=this.route.snapshot.paramMap['id']
    this.service.findOne(this.id).subscribe({
      next:(res:any)=>{
        this.details=res.data
      }
    })
  }
}
