import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Biodata } from '@modules/biodata/biodata';
import { BiodataService } from '@modules/biodata/biodata.service';

@Component({
  selector: 'app-biodata-add',
  templateUrl: './biodata-add.component.html',
  styleUrls: ['./biodata-add.component.scss']
})
export class BiodataAddComponent {
  title:string='Biodata'
  biodataForm:FormGroup
  biodata:Biodata={
    nama: '',
  }
  constructor(private service:BiodataService, private router:Router, private fb:FormBuilder){}
  ngOnInit():void{
    this.biodataForm=this.fb.group({
      nama:[''],
      nik:[''],
      address:['']
    })
  }
  create():void{
    this.service.create(this.biodataForm.value).subscribe({
      next:()=>{
        console.log('insert success')
        this.router.navigateByUrl('biodata')
      }
    })
  }
}
