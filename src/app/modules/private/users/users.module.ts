import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class UsersModule { }
