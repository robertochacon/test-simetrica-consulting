import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class TasksModule { }
