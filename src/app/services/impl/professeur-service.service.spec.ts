import { TestBed } from '@angular/core/testing';

import { ProfesseurServiceService } from './professeur-service.service';

describe('ProfesseurServiceService', () => {
  let service: ProfesseurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
