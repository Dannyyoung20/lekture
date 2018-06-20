import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {}

  login(credentials) {
    return this.http.post('http://localhost:8000/api/login', credentials);
  }
}
