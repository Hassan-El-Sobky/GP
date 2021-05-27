import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterInterceptor implements HttpInterceptor {

  constructor(public loaderServive:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderServive.isLoading.next(true)

    return next.handle(request).pipe(
      finalize(
        ()=>{
          this.loaderServive.isLoading.next(false);
        }
      )
    );
  }
}
