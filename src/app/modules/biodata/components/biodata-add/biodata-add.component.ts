import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BiodataService } from '@modules/biodata/biodata.service';

@Component({
  selector: 'app-biodata-add',
  templateUrl: './biodata-add.component.html',
  styleUrls: ['./biodata-add.component.scss']
})
export class BiodataAddComponent {
  articleForm:FormGroup
  constructor(private service:BiodataService, private router:Router, private fb:FormBuilder){}
  ngOnInit():void{
    
  }
  create():void{
    this.service.create(this.articleForm.value).subscribe({
      next:()=>{
        console.log('insert success')
        this.router.navigateByUrl('biodata')
      }
    })
  }
}
