import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ToolbarModule,
    SharedModule
  ]
})
export class UsersModule { }
