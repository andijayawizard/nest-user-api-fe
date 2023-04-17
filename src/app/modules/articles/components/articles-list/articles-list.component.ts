import { Component } from '@angular/core';
import { ArticlesService } from '@modules/articles/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
  title:string='Articles'
  data:any[]=[]
  constructor(private service:ArticlesService){}
  ngOnInit():void{
    this.findAll()
  }
  findAll():void{
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.data=res
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
