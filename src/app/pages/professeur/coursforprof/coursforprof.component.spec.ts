import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursforprofComponent } from './coursforprof.component';

describe('CoursforprofComponent', () => {
  let component: CoursforprofComponent;
  let fixture: ComponentFixture<CoursforprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursforprofComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursforprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
