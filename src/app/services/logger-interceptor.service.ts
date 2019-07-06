import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("[LOGGER WORKS]");

    return next.handle(req).pipe(tap(response => {
      if (response instanceof HttpResponse) {
        console.log(response.status);

      }
      return response;
    },
      err => console.log(err),
      () => { console.log("DONE") }))

    // return next.handle(req).pipe(tap(response => {
    //   console.log("[RESPONSE]",response.type);

    //   return response;
    // }))

    // return next.handle(req).do(response => {
    //   console.log("[RESPONSE]",response);
    //   return response;
    // })
  }
  constructor() { }
}
