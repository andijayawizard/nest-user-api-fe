import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  create(data:Blog):Observable<Blog>{
    return this.http.post<Blog>(`${environment.baseUrl}/blog`, data)
  }
  findAll():Observable<Blog>{
    return this.http.get<Blog>(`${environment.baseUrl}/blog`)
  }
  findOne(id:string):Observable<Blog>{
    return this.http.get<Blog>(`${environment.baseUrl}/blog/${id}`)
  }
  update(id:string, data:Blog):Observable<Blog>{
    return this.http.patch<Blog>(`${environment.baseUrl}/blog/${id}`, data)
  }
  remove(id:string):Observable<Blog>{
    return this.http.delete<Blog>(`${environment.baseUrl}/blog/${id}`)
  }
}
