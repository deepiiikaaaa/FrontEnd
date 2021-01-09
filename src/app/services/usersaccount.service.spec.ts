import { TestBed } from '@angular/core/testing';

import { UsersaccountService } from './usersaccount.service';

describe('UsersaccountService', () => {
  let service: UsersaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
