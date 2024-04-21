import { TestBed } from '@angular/core/testing';

import { OMDBSerivceService } from './omdbserivce.service';

describe('OMDBSerivceService', () => {
  let service: OMDBSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OMDBSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
