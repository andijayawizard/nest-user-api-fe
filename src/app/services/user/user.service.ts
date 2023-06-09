import { User } from '@/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  createUser(data:User):Observable<User>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return    this.http.post<User>(`${environment.baseUrl}/user/create`, data, httpOptions)
  }
  getUsers():Observable<User[]>{
    return    this.http.get<User[]>(`${environment.baseUrl}/user/all`)
  }
  getUser(id:string):Observable<User>{
    return    this.http.get<User>(`${environment.baseUrl}/user/${id}`)
  }
  editUser(id:string, data:any):Observable<User>{
    return this.http.put<User>(`${environment.baseUrl}/user/edit/${id}`, data)
  }
  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(`${environment.baseUrl}/user/delete/${id}`)
  }
}
