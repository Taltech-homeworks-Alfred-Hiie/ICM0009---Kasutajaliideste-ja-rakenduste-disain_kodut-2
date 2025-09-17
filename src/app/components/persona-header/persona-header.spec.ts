import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaHeaderComponent } from './persona-header';

describe('PersonaHeader', () => {
  let component: PersonaHeaderComponent;
  let fixture: ComponentFixture<PersonaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
