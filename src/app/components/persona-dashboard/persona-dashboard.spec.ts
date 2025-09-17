import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDashboard } from './persona-dashboard';

describe('PersonaDashboard', () => {
  let component: PersonaDashboard;
  let fixture: ComponentFixture<PersonaDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
