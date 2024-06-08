import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolaireFormComponent } from './annee-scolaire-form.component';

describe('AnneeScolaireFormComponent', () => {
  let component: AnneeScolaireFormComponent;
  let fixture: ComponentFixture<AnneeScolaireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnneeScolaireFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnneeScolaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
