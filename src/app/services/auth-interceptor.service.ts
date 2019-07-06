import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("[AUTH INTERCEPTOR WORKS]");
    const clonedReq = req.clone({
      params: new HttpParams().set("auth", this.authService.getToken())
    })
    return next.handle(clonedReq);
  }

  constructor(private authService: AuthService) { }
}
