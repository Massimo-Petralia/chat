import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usersDataURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient){}

  checkRegistration(user: User): Observable<{nick_name: User[], password: User[]}> {

    const nick_name$ = this.http.get<User[]>(`${this.usersDataURL}?nick_name_like=${user.nick_name}`)
    const password$ = this.http.get<User[]>(`${this.usersDataURL}?q=${user.password}`)
    
    return  forkJoin({ nick_name: nick_name$, password: password$ });
  }

  
checkLogIn(user: User) {
  return 
}

  getUsers() {
    return this.http.get<User[]>(this.usersDataURL).pipe(
      catchError((error) => {
        console.error('get users fail', error);
        throw error;
      })
    );
  }

  createUser(user: User) {
    return this.http.post<User>(this.usersDataURL, user).pipe(
      catchError((error) => {
        console.error('post users fail', error);
        throw error;
      })
    );
  }
}
