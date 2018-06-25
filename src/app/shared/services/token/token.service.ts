import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token, expire) {
    if (token === '' && expire === '') {
      return false;
    }
    this.setToken(token);
    this.setExpiration(expire);
    return true;
  }

  get getToken() {
    const token = localStorage.getItem('token');
    if (! token) {
      return null;
    }
    return token;
  }

  get getExpires() {
    const token = localStorage.getItem('expiration');
    if (! token) {
      return null;
    }
    return token;
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  setExpiration(token) {
    localStorage.setItem('expiration', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  removeExpires() {
    localStorage.removeItem('expiration');
  }

  decodePayload(payload) {
    console.log(payload);
    return JSON.parse(atob(payload));
  }

  getPayload(token) {
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  isTokenValid(): Boolean {
    const token = this.getToken;
    const expires_at: string = this.getExpires;

    if (!token && !expires_at) {
      return false;
    }
    // tslint:disable-next-line:radix
    if (Date.now() > parseInt(expires_at)) {
      this.removeToken();
      this.removeExpires();
      return false;
    }
    return true;
  }

  isLoggedIn(): Boolean {
    return this.isTokenValid();
  }
}
