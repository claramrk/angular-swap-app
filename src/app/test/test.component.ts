import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  onClick() {
    console.log('clicked');
  }
  logInputValue(inputValue: string): void {
    console.log('Eingabewert:', inputValue);
  }

  items: Array<string> = ['Apfel', 'Banane', 'Orange', 'Traube'];
}
