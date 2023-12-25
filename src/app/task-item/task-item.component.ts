import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../services/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent implements OnInit {
  tasks: Task[] = [];
  faTrash = faTrash; // Das Font Awesome Trash-Icon

  @Input() task!: Task; // Eingabe: Die aktuelle Aufgabe

  constructor(
    private taskService: TaskService,
    private library: FaIconLibrary,
  ) {
    library.addIcons(faTrash); // Fügt das Trash-Icon zur Font Awesome-Bibliothek hinzu
  }

  ngOnInit(): void {
    // Bei Initialisierung werden Aufgaben geladen und in der tasks-Liste gespeichert
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>(); // Ausgabe-Event für das Löschen

  onDelete(task: Task) {
    // Die onDelete-Methode wird aufgerufen, wenn der Delete-Button geklickt wird
    this.onDeleteTask.emit(task); // Löst das onDeleteTask-Ereignis aus und übergibt die Aufgabe
  }

  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  onToggleReminder(task: Task): void {
    this.toggleReminder.emit(task);
  }
}
