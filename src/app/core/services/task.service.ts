import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    return this.http.get<Task>(this.apiUrl + '/todos');
  }

}
