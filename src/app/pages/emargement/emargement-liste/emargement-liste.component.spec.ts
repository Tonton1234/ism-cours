import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmargementListeComponent } from './emargement-liste.component';

describe('EmargementListeComponent', () => {
  let component: EmargementListeComponent;
  let fixture: ComponentFixture<EmargementListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmargementListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmargementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
