import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './articles';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }
  create(data:Articles):Observable<Articles>{
    return this.http.post<Articles>(`${environment.baseUrl}/articles`, data)
  }
  findAll():Observable<Articles>{
    return this.http.get<Articles>(`${environment.baseUrl}/articles`)
  }
  findDrafts():Observable<Articles>{
    return this.http.get<Articles>(`${environment.baseUrl}/articles/drafts`)
  }
  findOne(id:string):Observable<Articles>{
    return this.http.get<Articles>(`${environment.baseUrl}/articles/${id}`)
  }
  update(id:string, data:Articles):Observable<Articles>{
    return this.http.patch<Articles>(`${environment.baseUrl}/articles/${id}`, data)
  }
  remove(id:string):Observable<Articles>{
    return this.http.delete<Articles>(`${environment.baseUrl}/articles/${id}`)
  }
}
