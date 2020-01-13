import { TestBed } from '@angular/core/testing';

import { MenuServService } from './menu-serv.service';

describe('MenuServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuServService = TestBed.get(MenuServService);
    expect(service).toBeTruthy();
  });
});
