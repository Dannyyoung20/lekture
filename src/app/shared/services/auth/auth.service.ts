import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseApiUrl } from '../../general/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {}

  login(credentials) {
    return this.http.post(`${baseApiUrl}/login`, credentials);
  }
}
