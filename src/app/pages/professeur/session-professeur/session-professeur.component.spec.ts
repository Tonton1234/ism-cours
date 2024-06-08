import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionProfesseurComponent } from './session-professeur.component';

describe('SessionProfesseurComponent', () => {
  let component: SessionProfesseurComponent;
  let fixture: ComponentFixture<SessionProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionProfesseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
