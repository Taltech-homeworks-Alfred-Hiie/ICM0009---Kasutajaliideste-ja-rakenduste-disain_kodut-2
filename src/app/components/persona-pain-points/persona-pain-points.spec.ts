import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPainPoints } from './persona-pain-points';

describe('PersonaPainPoints', () => {
  let component: PersonaPainPoints;
  let fixture: ComponentFixture<PersonaPainPoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaPainPoints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaPainPoints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
