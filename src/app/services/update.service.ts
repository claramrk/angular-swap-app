import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private showUpdateTask: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  toggleUpdateTask(): void {
    this.showUpdateTask = !this.showUpdateTask;
    this.subject.next(this.showUpdateTask);
  }

  onToggleReminder(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
