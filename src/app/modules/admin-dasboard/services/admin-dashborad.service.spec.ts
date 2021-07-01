import { TestBed } from '@angular/core/testing';

import { AdminDashboradService } from './admin-dashborad.service';

describe('AdminDashboradService', () => {
  let service: AdminDashboradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashboradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
