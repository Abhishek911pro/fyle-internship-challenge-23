import { TestBed } from '@angular/core/testing';

import { RepoapiService } from './repoapi.service';

describe('RepoapiService', () => {
  let service: RepoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
