import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-quotes.html',
  styleUrls: ['./persona-quotes.scss']
})
export class PersonaQuotesComponent {
  @Input() quotes!: string[];
}