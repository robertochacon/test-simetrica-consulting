import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of([
      { id: 1, name: 'User One', email: 'user1@gmail.com', phone: '809-898-2342' },
      { id: 2, name: 'User Two', email: 'user2@gmail.com', phone: '829-898-7283' }
    ]);
  }
}
