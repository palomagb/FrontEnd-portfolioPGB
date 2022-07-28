import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticationServ: AutenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
  // add auth header with jwt if user is logged in and request is to the api url
  const currentUser = this.autenticationServ.currentUserValue;
  const isLoggedIn = currentUser && currentUser.token;
  // const isApiUrl = request.url.startsWith(environment.apiUrl);
  if (isLoggedIn) {
      req = req.clone({
          setHeaders: {
              Auth: `${currentUser.token}`
          }
      });
  }

  return next.handle(req);
}
}
