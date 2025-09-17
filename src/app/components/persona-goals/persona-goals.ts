import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-goals.html',
  styleUrls: ['./persona-goals.scss']
})
export class PersonaGoalsComponent {
  @Input() goals!: string[];
}