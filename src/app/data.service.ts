import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API endpoint
  private apiUrl = environment.apiUrl; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Example service method to get data from the API
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}