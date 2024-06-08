import { TestBed } from '@angular/core/testing';

import { SemestreServiceService } from './semestre-service.service';

describe('SemestreServiceService', () => {
  let service: SemestreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
