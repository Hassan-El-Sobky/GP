import { TestBed } from '@angular/core/testing';

import { AdminStudentsService } from './admin-students.service';

describe('AdminStudentsService', () => {
  let service: AdminStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
