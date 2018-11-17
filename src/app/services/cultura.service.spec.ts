import { TestBed, inject } from '@angular/core/testing';

import { CulturaService } from './cultura.service';

describe('CulturaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CulturaService]
    });
  });

  it('should be created', inject([CulturaService], (service: CulturaService) => {
    expect(service).toBeTruthy();
  }));
});
