import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bigslide';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button-toggle').bigSlide();
  }

}
