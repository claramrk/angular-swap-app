import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { tasks } from './mock-tasks';
import { Task } from './task';
import { TasksComponent } from './tasks/tasks.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestComponent,
    HeaderComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swap-app';
  tasks: Task[] = tasks; // Weise die Aufgabenliste zu
}
