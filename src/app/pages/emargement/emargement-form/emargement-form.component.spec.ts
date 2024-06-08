import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmargementFormComponent } from './emargement-form.component';

describe('EmargementFormComponent', () => {
  let component: EmargementFormComponent;
  let fixture: ComponentFixture<EmargementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmargementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmargementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
