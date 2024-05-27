import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '',loadChildren: () => import('./modules/public/auth/auth-routing.module').then(m => m.AuthRoutingModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/private/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'users', loadChildren: () => import('./modules/private/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] },
  { path: 'tasks', loadChildren: () => import('./modules/private/tasks/tasks.module').then(m => m.TasksModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
