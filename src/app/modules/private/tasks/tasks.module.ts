import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ToolbarModule,
    SharedModule
  ]
})
export class TasksModule { }
