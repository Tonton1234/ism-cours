import { TestBed } from '@angular/core/testing';

import { ProfesseurClasseModulesServiceService } from './professeur-classe-modules-service.service';

describe('ProfesseurClasseModulesServiceService', () => {
  let service: ProfesseurClasseModulesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseurClasseModulesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
