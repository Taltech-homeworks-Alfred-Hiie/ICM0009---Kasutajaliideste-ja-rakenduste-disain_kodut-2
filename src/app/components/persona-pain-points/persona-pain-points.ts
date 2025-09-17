import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-pain-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-pain-points.html',
  styleUrls: ['./persona-pain-points.scss']
})
export class PersonaPainPointsComponent {
  @Input() painPoints!: string[];
}