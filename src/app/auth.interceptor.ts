import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor works');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.authuser()}`
        
      }
    });
    return next.handle(request);
  
  }
}
