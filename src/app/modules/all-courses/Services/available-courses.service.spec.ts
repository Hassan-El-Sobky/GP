import { TestBed } from '@angular/core/testing';

import { AvailableCoursesService } from './available-courses.service';

describe('AvailableCoursesService', () => {
  let service: AvailableCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
