import { TestBed } from '@angular/core/testing';

import { AbscenceServiceService } from './abscence-service.service';

describe('AbscenceServiceService', () => {
  let service: AbscenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbscenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
