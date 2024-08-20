import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrapiService {
  private brapiApiUrl: string = 'https://brapi.dev/api'
  constructor(private readonly _httpClient: HttpClient) { }

  getBrapiQuoteList(): Observable<any>{
    return this._httpClient.get(`${this.brapiApiUrl}/quote/list?limit=50&page=1`, {
      observe: "response",
    });
  }

}
