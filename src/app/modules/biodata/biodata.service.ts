import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biodata } from './biodata';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiodataService {

  constructor(private http:HttpClient) { }
  create(data:Biodata):Observable<Biodata>{
    return this.http.post<Biodata>(`${environment.baseUrl}/biodata`, data)
  }
  findAll():Observable<Biodata>{
    return this.http.get<Biodata>(`${environment.baseUrl}/biodata`)
  }
  findOne(id:string):Observable<Biodata>{
    return this.http.get<Biodata>(`${environment.baseUrl}/biodata/${id}`)
  }
  update(id:string, data:Biodata):Observable<Biodata>{
    return this.http.put<Biodata>(`${environment.baseUrl}/biodata/${id}`, data)
  }
  remove(id:string):Observable<Biodata>{
    return this.http.delete<Biodata>(`${environment.baseUrl}/biodata/${id}`)
  }
}
