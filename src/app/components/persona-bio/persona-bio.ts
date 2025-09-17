import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor

@Component({
  selector: 'app-persona-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-bio.html',
  styleUrls: ['./persona-bio.scss']
})
export class PersonaBioComponent {
  @Input() bio!: string;
}