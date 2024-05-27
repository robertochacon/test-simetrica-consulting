import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<User[]> {
  //   return of([
  //     { id: 1, name: 'User One', email: 'user1@gmail.com', phone: '809-898-2342' },
  //     { id: 2, name: 'User Two', email: 'user2@gmail.com', phone: '829-898-7283' }
  //   ]);
  // }

  getAllUsers(): Observable<any> {
    return this.http.get<User>(this.apiUrl + '/users');
  }

}
