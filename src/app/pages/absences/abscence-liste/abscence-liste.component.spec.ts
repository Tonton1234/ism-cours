import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceListeComponent } from './abscence-liste.component';

describe('AbscenceListeComponent', () => {
  let component: AbscenceListeComponent;
  let fixture: ComponentFixture<AbscenceListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbscenceListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbscenceListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
