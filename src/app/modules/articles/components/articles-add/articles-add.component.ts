import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Articles } from '@modules/articles/articles';
import { ArticlesService } from '@modules/articles/articles.service';

@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.scss']
})
export class ArticlesAddComponent {
  title:string='Articles'
  articlesForm:FormGroup
  articles:Articles={
    title: '',
    description:'',
    body:''
  }
  submitted:boolean=false
  constructor(private service:ArticlesService, private router:Router, private fb:FormBuilder){}
  ngOnInit():void{
    this.articlesForm=this.fb.group({
      title:[''],
      description:[''],
      body:['']
    })
  }
  storeArticles():void{
    this.service.create(this.articlesForm.value).subscribe({
      next:()=>{
        console.log('insert success')
        this.router.navigateByUrl('articles')
      }
    })
  }
  // newArticles():void{
  //   this.submitted=false
  //   this.articles={
  //     title:'',
  //     description:'',
  //     body:''
  //   }
  // }
  reset():void{
    this.articles={
      title:'',description:'',body:''
    }
  }
}