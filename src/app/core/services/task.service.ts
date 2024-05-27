import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    return of([
      { id: 1, title: 'Task One', description: 'Description One', completed: false },
      { id: 2, title: 'Task Two', description: 'Description Two', completed: true }
    ]);
  }
}
