import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {
  url: string = 'http://localhost:3200'
  constructor(private http: HttpClient) {}

  getVendehumos(): any{
    return this.http.get(`${this.url}/vendehumos`);
  }
}
