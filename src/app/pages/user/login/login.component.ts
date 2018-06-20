import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { TokenService } from '../../../shared/services/token/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors: any = null;
  isLoading: Boolean = false;

  constructor(private auth: AuthService, private token: TokenService, private router: Router) {}

  credentials = {
    email: null,
    password: null
  };

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.auth.login(this.credentials)
             .subscribe(result => this.handleResponse(result),
                        error =>  this.handleError(error));
  }

  handleResponse(response) {
    const body = response._body;
    const cleaned = JSON.parse(body);
    const process = this.token.handle(cleaned.access_token, cleaned.expires_in + Date.now());
    if (process) {
      this.router.navigate(['/home']);
    }
  }

  handleError(error) {
    this.isLoading = false;
    this.errors = error;
  }

}
