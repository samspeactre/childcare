import { TestBed } from '@angular/core/testing';

import { UserServiceId } from './user.service';

describe('UserService', () => {
  let service: UserServiceId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
