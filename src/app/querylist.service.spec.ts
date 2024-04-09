import { TestBed } from '@angular/core/testing';

import { QuerylistService } from './querylist.service';

describe('QuerylistService', () => {
  let service: QuerylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuerylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
