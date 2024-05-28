import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  arrayColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'phone'];
  dataSource = new MatTableDataSource<User>();
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.dataSource.data = users.users;
      this.isLoading = false;
    });
  }
}
