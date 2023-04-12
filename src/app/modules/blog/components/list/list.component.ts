import { Component } from '@angular/core';
import { Blog } from '@modules/blog/blog';
import { BlogService } from '@modules/blog/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  title:string='Blog'
  data:any[]=[]
  constructor(private service:BlogService){}
  ngOnInit():void{
    this.findAll()
  }
  findAll():void{
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.data=res.data
      }
    })
  }
  remove(id:string):void{
    this.service.remove(id).subscribe({
      next:()=>{
        console.log('delete success')
      }
    })
  }
}
