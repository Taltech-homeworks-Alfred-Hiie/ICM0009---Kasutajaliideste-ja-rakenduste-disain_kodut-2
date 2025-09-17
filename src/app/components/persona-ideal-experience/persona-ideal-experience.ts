import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-ideal-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-ideal-experience.html',
  styleUrls: ['./persona-ideal-experience.scss']
})
export class PersonaIdealExperienceComponent {
  @Input() idealExperience!: string[];
}