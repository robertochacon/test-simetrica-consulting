import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('./modules/public/auth/auth-routing.module').then(m => m.AuthRoutingModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/private/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'users', loadChildren: () => import('./modules/private/users/users.module').then(m => m.UsersModule) },
  { path: 'tasks', loadChildren: () => import('./modules/private/tasks/tasks.module').then(m => m.TasksModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
