import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurListeComponent } from './professeur-liste.component';

describe('ProfesseurListeComponent', () => {
  let component: ProfesseurListeComponent;
  let fixture: ComponentFixture<ProfesseurListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesseurListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesseurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
