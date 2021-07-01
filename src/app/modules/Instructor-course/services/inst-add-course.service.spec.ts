import { TestBed } from '@angular/core/testing';

import { InstAddCourseService } from './inst-add-course.service';

describe('InstAddCourseService', () => {
  let service: InstAddCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstAddCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
