import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-needs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-needs.html',
  styleUrls: ['./persona-needs.scss']
})
export class PersonaNeedsComponent {
  @Input() needs!: string[];
}