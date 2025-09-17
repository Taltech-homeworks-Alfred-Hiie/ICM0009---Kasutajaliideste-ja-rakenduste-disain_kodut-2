// src/app/components/persona-dashboard/persona-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonaService, Persona } from '../../services/persona';
// Import all child components here
import { PersonaHeaderComponent } from '../persona-header/persona-header';
import { PersonaBioComponent } from '../persona-bio/persona-bio';
import { PersonaQuotesComponent } from '../persona-quotes/persona-quotes';
import { PersonaNeedsComponent } from '../persona-needs/persona-needs';
import { PersonaPainPointsComponent } from '../persona-pain-points/persona-pain-points';
import { PersonaIdealExperienceComponent } from '../persona-ideal-experience/persona-ideal-experience';
import { PersonaGoalsComponent } from '../persona-goals/persona-goals';

@Component({
  selector: 'app-persona-dashboard',
  standalone: true, // Make sure this is present
  imports: [
    PersonaHeaderComponent,
    PersonaBioComponent,
    PersonaQuotesComponent,
    PersonaNeedsComponent,
    PersonaPainPointsComponent,
    PersonaIdealExperienceComponent,
    PersonaGoalsComponent
  ],
  templateUrl: './persona-dashboard.html',
  styleUrls: ['./persona-dashboard.scss']
})
export class PersonaDashboardComponent implements OnInit {
  persona!: Persona;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.persona = this.personaService.getPersona();
  }
}