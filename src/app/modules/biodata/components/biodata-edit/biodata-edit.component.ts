import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Biodata } from '@modules/biodata/biodata';
import { BiodataService } from '@modules/biodata/biodata.service';

@Component({
  selector: 'app-biodata-edit',
  templateUrl: './biodata-edit.component.html',
  styleUrls: ['./biodata-edit.component.scss']
})
export class BiodataEditComponent {
  title:string='Biodata'
  id:string
  form:FormGroup
  biodata:Biodata
  constructor(private service:BiodataService, private router:Router, private route:ActivatedRoute){}
  ngOnInit():void{
    const id:string=this.route.snapshot.params['id']
    this.service.findOne(id).subscribe({
      next:(res:Biodata)=>{
        this.biodata=res
      }
    })
    this.form=new FormGroup({
      nama: new FormControl('', [Validators.required])
    })
  }
  get f(){
    return this.form.controls
  }
  update():void{
    console.log(this.form.value)
    this.service.update(this.id, this.form.value).subscribe({
      next:()=>{
        console.log('update success')
        this.router.navigateByUrl('biodata')
      }
    })
  }
}
