import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError, every } from 'rxjs';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usersDataURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  checkRegistration(
    item: User
  ): Observable<{ nick_name: boolean; password: boolean }> {
    const nick_name$ = this.http
      .get<User[]>(`${this.usersDataURL}?nick_name=${item.nick_name}`)
      .pipe(every((value) => (value.length !== 0 ? true : false)));
    const password$ = this.http
      .get<User[]>(`${this.usersDataURL}?password=${item.password}`)
      .pipe(every((value) => (value.length !== 0 ? true : false)));

    return forkJoin({ nick_name: nick_name$, password: password$ });
  }

  checkLogIn(
    logUser: User
  ): Observable<{ nick_name: User[]; password: User[] }> {
    const nick_name$ = this.http.get<User[]>(
      `${this.usersDataURL}?nick_name_like=${logUser.nick_name}`
    );
    const password$ = this.http.get<User[]>(
      `${this.usersDataURL}?password_like=${logUser.password}`
    );

    return forkJoin({ nick_name: nick_name$, password: password$ });
  }

  getUsers(page: number) {
    return this.http
      .get<User[]>(`${this.usersDataURL}?_page=${page}`, {
        observe: 'response',
      })
      .pipe(
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
