import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonaDashboardComponent } from './components/persona-dashboard/persona-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonaDashboardComponent],
  templateUrl: './app.html', // Note the path here should be to the app component's template
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'persona-website';
}