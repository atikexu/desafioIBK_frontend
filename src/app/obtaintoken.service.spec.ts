import { TestBed } from '@angular/core/testing';

import { ObtaintokenService } from './obtaintoken.service';

describe('ObtaintokenService', () => {
  let service: ObtaintokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtaintokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
