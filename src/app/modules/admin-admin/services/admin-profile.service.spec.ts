import { TestBed } from '@angular/core/testing';

import { AdmiProfileService } from './admin-profile.service';

describe('AdmiProfileService', () => {
  let service: AdmiProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmiProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
