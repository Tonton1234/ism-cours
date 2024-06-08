import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceFormComponent } from './abscence-form.component';

describe('AbscenceFormComponent', () => {
  let component: AbscenceFormComponent;
  let fixture: ComponentFixture<AbscenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbscenceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbscenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
