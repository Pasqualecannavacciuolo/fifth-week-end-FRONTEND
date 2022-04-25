import { TestBed } from '@angular/core/testing';

import { SpettacoloService } from './spettacolo.service';

describe('SpettaoloService', () => {
  let service: SpettacoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpettacoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
