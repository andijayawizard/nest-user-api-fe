import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiodataService } from '@modules/biodata/biodata.service';

@Component({
  selector: 'app-biodata-details',
  templateUrl: './biodata-details.component.html',
  styleUrls: ['./biodata-details.component.scss']
})
export class BiodataDetailsComponent {
  title:string='Biodata'
  details:any
  constructor(private service:BiodataService, private route:ActivatedRoute){}
  ngOnInit():void{this.findOne()}
  findOne():void{
    const id:string=this.route.snapshot.params['id']
    this.service.findOne(id).subscribe({
      next:(res:any)=>{
        this.details=res.data
      }
    })
  }
}
