import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolairesComponent } from './annee-scolaires.component';

describe('AnneeScolairesComponent', () => {
  let component: AnneeScolairesComponent;
  let fixture: ComponentFixture<AnneeScolairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnneeScolairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnneeScolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
