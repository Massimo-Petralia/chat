import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  usersDataURL = "http://localhost:3000/users"

  constructor() { }
}
