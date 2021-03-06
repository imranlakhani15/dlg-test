import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getFaqsData(): Observable<any> {
    return this.httpClient.get('/assets/data/faqs.json');
  }
}
