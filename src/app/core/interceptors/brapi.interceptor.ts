import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BrapiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('https://brapi.dev/api')) {
      const apiKey = process.env['BRAPI'];

      if (apiKey) {
        const modifiedReq = req.clone({
          setHeaders: {
            "Authorization": `Bearer ${apiKey}`
          }
        });
        return next.handle(modifiedReq);
      } else {
        console.error('BRAPI_API_KEY is not defined!');
        return next.handle(req);
      }
    }

    return next.handle(req);
  }
}
