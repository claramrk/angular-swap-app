import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiBaseUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiBaseUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiBaseUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiBaseUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTaskService(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiBaseUrl, task, httpOptions);
  }
}
