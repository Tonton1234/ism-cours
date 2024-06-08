import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurClasseModulesFormComponent } from './professeur-classe-modules-form.component';

describe('ProfesseurClasseModulesFormComponent', () => {
  let component: ProfesseurClasseModulesFormComponent;
  let fixture: ComponentFixture<ProfesseurClasseModulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesseurClasseModulesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesseurClasseModulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
