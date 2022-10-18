import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  public baseUrl = "https://continent-backend.herokuapp.com/continent";

  constructor(private http: HttpClient) { }

  public getContinents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getContinent(_squery: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter?s=${_squery}`);
  }

  public addContinent(continent: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, continent);
  }
}