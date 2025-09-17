import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaIdealExperience } from './persona-ideal-experience';

describe('PersonaIdealExperience', () => {
  let component: PersonaIdealExperience;
  let fixture: ComponentFixture<PersonaIdealExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaIdealExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaIdealExperience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
