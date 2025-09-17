import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaGoals } from './persona-goals';

describe('PersonaGoals', () => {
  let component: PersonaGoals;
  let fixture: ComponentFixture<PersonaGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
