import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import {User} from '../model/userModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API endpoint
  private apiUrl = environment.apiUrl; // Replace with your API endpoint

  constructor(private http: HttpClient,private router: Router) { }

  // Example service method to get data from the API
  login(user: User): void {
    //this.http.get<any>(this.apiUrl + '/login').subscribe((response) => { debugger; this.saveToken(response)});
    this.http.post<any>(this.apiUrl + '/login',user).subscribe(response => 
      { 
        debugger; 
        this.saveToken(response.token);
        this.router.navigate(['/tasks']);
    },error => 
    { 
      alert('Invalid credential!!!');
    });
    //return this.getToken;
  }

  
  private tokenKey = 'auth_token';
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}