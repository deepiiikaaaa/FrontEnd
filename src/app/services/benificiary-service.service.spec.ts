import { TestBed } from '@angular/core/testing';

import { BenificiaryServiceService } from './benificiary-service.service';

describe('BenificiaryServiceService', () => {
  let service: BenificiaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenificiaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
