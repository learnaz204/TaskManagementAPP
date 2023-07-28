import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Tasks } from '../model/taskModel';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API endpoint
  private apiUrl = environment.apiUrl; // Replace with your API endpoint

  constructor(private http: HttpClient,private authService:AuthService) { 
  
  }

  

  // Example service method to get data from the API
  getTasks(): Observable<Tasks[]> {
        // Get the token from your AuthService
        let authToken = this.authService.getToken();

        // Set the token in the headers of the request
        let headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
  
    return this.http.get<Tasks[]>(this.apiUrl + '/tasks', { headers });
  }
}