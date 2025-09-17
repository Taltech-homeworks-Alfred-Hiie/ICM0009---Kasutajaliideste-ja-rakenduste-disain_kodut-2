import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../../services/persona';

@Component({
  selector: 'app-persona-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-header.html',
  styleUrls: ['./persona-header.scss']
})
export class PersonaHeaderComponent {
  @Input() persona!: Persona;
}