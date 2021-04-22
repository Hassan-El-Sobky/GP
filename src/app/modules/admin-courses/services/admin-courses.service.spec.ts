import { TestBed } from '@angular/core/testing';

import { AdminCoursesService } from './admin-courses.service';

describe('AdminCoursesService', () => {
  let service: AdminCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
