import { TestBed } from '@angular/core/testing';

import { EmargementServiceService } from './emargement-service.service';

describe('EmargementServiceService', () => {
  let service: EmargementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmargementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
