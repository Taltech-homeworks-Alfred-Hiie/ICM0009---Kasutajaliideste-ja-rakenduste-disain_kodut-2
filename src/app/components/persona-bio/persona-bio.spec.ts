import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaBio } from './persona-bio';

describe('PersonaBio', () => {
  let component: PersonaBio;
  let fixture: ComponentFixture<PersonaBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
