import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() tasks: Task[] = [];
}
