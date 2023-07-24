import { TestBed } from '@angular/core/testing';

import { MovietableService } from './movietable.service';

describe('MovietableService', () => {
  let service: MovietableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovietableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
