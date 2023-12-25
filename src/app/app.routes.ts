import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  { path: '', component: TasksComponent }, // Index route
  { path: 'about', component: AboutComponent },
];
