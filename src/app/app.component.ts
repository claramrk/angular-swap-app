import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { tasks } from './mock-tasks';
import { Task } from './task';
import { TaskItemComponent } from './task-item/task-item.component';
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
    HttpClientModule,
    TasksComponent,
    TaskItemComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swap-app';
  tasks: Task[] = tasks; // Weise die Aufgabenliste zu
}
