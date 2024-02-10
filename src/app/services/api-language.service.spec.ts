import { TestBed } from '@angular/core/testing';

import { ApiLanguageService } from './api-language.service';

describe('ApiLanguageService', () => {
  let service: ApiLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
