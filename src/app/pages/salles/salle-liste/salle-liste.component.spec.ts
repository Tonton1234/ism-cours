import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleListeComponent } from './salle-liste.component';

describe('SalleListeComponent', () => {
  let component: SalleListeComponent;
  let fixture: ComponentFixture<SalleListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
