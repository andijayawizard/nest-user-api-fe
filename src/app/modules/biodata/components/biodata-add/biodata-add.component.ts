import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    // this.biodataForm=new FormGroup({
    //   nama:new FormControl('', [Validators.required])
    // })
    this.biodataForm=this.fb.group({
      nama:[''],
      nik:[''],
      address:['']
    })
  }
  get f(){
    return this.biodataForm.controls
  }
  create():void{
    console.log(this.biodataForm.value)
    this.service.create(this.biodataForm.value).subscribe({
      next:()=>{
        console.log('insert success')
        this.router.navigateByUrl('biodata')
      }
    })
  }
}
