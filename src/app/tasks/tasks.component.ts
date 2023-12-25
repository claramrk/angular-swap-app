import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../services/task.service';
import { Task } from '../task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NgFor,
    TaskItemComponent,
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Diese Methode wird aufgerufen, wenn die Komponente initialisiert wird
    // Hier werden die Aufgaben geladen und der tasks-Array aktualisiert
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }

  deleteTask(task: Task) {
    // Diese Methode wird aufgerufen, wenn eine Aufgabe gelöscht werden soll
    // Der taskService.deleteTask() löscht die Aufgabe über eine HTTP-Anfrage
    // Nach dem erfolgreichen Löschen wird die tasks-Array aktualisiert, um die gelöschte Aufgabe zu entfernen
    this.taskService
      .deleteTaskTest(task.id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)),
      );
  }

  addTask(task: Task) {
    this.taskService

      .addTask(task)

      .subscribe((task) => this.tasks.push(task));
  }
}
