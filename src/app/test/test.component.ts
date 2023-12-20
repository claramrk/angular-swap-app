import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  onClick() {
    console.log('clicked');
  }
}
