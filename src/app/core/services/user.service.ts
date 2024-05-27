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

  getAllUsers(): Observable<any> {
    return this.http.get<User>(this.apiUrl + '/users');
  }

}
