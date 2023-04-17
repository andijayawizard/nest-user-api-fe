import { Component } from '@angular/core';
import { BiodataService } from '@modules/biodata/biodata.service';

@Component({
  selector: 'app-biodata-list',
  templateUrl: './biodata-list.component.html',
  styleUrls: ['./biodata-list.component.scss']
})
export class BiodataListComponent {
  data:any[]=[]
  constructor(private service:BiodataService){}
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
