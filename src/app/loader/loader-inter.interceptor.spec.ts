import { TestBed } from '@angular/core/testing';

import { LoaderInterInterceptor } from './loader-inter.interceptor';

describe('LoaderInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderInterInterceptor = TestBed.inject(LoaderInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
