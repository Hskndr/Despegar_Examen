import { TestBed } from '@angular/core/testing';

import { ServiceOneTwoService } from './service-one-two.service';

describe('ServiceOneTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOneTwoService = TestBed.get(ServiceOneTwoService);
    expect(service).toBeTruthy();
  });
});
