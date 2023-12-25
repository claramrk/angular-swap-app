import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { Task } from '../task';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent implements OnInit {
  showUpdateTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.updateService
      .onToggleReminder()
      .subscribe((value) => {
        this.showUpdateTask = value;
      });
  }

  ngOnInit(): void {}

  showUpdateForm: boolean = false;
  id!: number;
  text!: string;
  day!: string;
  reminder!: boolean;

  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter<Task>();

  onSubmit() {
    if (!this.text) {
      alert('Please update task');
      return;
    }

    const updatedTask: Task = {
      id: this.id, // Set the ID accordingly
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onUpdateTask.emit(updatedTask);
  }
}
