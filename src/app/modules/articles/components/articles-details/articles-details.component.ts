import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '@modules/articles/articles.service';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent {
  title:string='Articles'
  details:any
  constructor(private service:ArticlesService, private route:ActivatedRoute){}
  ngOnInit():void{this.findOne()}
  findOne():void{
    const id:string=this.route.snapshot.params['id']
    this.service.findOne(id).subscribe({
      next:(res:any)=>{
        this.details=res
      }
    })
  }
}
