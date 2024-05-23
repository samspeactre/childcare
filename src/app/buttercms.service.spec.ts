import { TestBed } from '@angular/core/testing';

import { ButtercmsService } from './buttercms.service';

describe('ButtercmsService', () => {
  let service: ButtercmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtercmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
