import { TestBed } from '@angular/core/testing';

import { DeliveriesServService } from './deliveries-serv.service';

describe('DeliveriesServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliveriesServService = TestBed.get(DeliveriesServService);
    expect(service).toBeTruthy();
  });
});
