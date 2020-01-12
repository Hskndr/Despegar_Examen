import { TestBed } from '@angular/core/testing';

import { DeliverytwoServService } from './deliverytwo-serv.service';

describe('DeliverytwoServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliverytwoServService = TestBed.get(DeliverytwoServService);
    expect(service).toBeTruthy();
  });
});
