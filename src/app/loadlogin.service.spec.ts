import { TestBed, inject } from '@angular/core/testing';

import { LoadloginService } from './loadlogin.service';

describe('LoadloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadloginService]
    });
  });

  it('should be created', inject([LoadloginService], (service: LoadloginService) => {
    expect(service).toBeTruthy();
  }));
});
