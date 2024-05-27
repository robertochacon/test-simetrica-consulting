import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  ListTasks:any[] = [];
  arrayColumns: string[] = ['id'];

  constructor( private tasksService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
      this.tasksService.getAllTasks().subscribe( tasks => {
        this.ListTasks = tasks.todos;
    })
  }

  getStatus(val:boolean){
    return val ? 'Complete' : 'Incomplete'
  }

}
