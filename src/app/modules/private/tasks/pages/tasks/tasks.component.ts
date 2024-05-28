import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {

  arrayColumns: string[] = ['id', 'todo', 'completed'];
  dataSource = new MatTableDataSource<Task>();
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllTasks() {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.dataSource.data = tasks.todos;
      this.isLoading = false;
    });
  }

  getStatus(val: boolean) {
    return val ? 'Complete' : 'Incomplete';
  }
}
