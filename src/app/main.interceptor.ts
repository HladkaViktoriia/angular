import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, switchMap} from 'rxjs';
import {AuthService} from "./services";
import {IToken} from "./interfaces";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private  authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken());
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error) {
          if (res.status === 401) {
            return this.handle401Error(request, next)
          }
          if (res.status === 403) {
            this.router.navigate(['login'], {
              queryParams: {
                sessionFiled: true
              }
            })
          }
        }
      })
    )
  }

  addToken(reqeust: HttpRequest<any>, token: string | null): HttpRequest<any> {
    return reqeust.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    return this.authService.refreshToken().pipe(
      switchMap((tokens: IToken) => {
        return next.handle(this.addToken(request, tokens.access))
      })
    )
  }
}
