import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersDataURL = "http://localhost:3000/users"

  constructor(private http: HttpClient) { };

  checkProperty(user: User, property: string){
    return this.http.get<User[]>(`${this.usersDataURL}?${property}_like=${user.nick_name}`)
  }

  checkPassword(user: User){
    return this.http.get<User[]|[]>(`${this.usersDataURL}?q=${user.password}`)
  }

  getUsers(){
    return this.http.get<User[]>(this.usersDataURL).pipe(
      catchError((error)=>{
        console.error('get users fail', error);
        throw error
      })
    )
  }

  createUser(user: User){
    return this.http.post<User>(this.usersDataURL, user).pipe(
      catchError((error)=>{
        console.error('post users fail', error);
        throw error
      })
    )
  }
}
