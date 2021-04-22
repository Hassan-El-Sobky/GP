import { TestBed } from '@angular/core/testing';

import { AdminInstructorsService } from './admin-instructors.service';

describe('AdminInstructorsService', () => {
  let service: AdminInstructorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInstructorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
