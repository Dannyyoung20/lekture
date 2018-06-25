import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token/token.service';
import * as $ from 'jquery';
import 'bigslide';
import { CourseService } from '../../services/course/course.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: Boolean = false;
  isAuthenticated: Boolean;
  courses$: Array<any> = [];

  constructor(private token: TokenService,
              private course: CourseService) {}

  ngOnInit() {
    this.getCourses();
    this.isAuthenticated = this.token.isTokenValid();
    $('.button-toggle').bigSlide();
  }

  getCourses() {
    this.isLoading = true;
    this.course.getCourses()
                .subscribe(response => this.handleResponse(response));
  }

  handleResponse(data) {
    this.courses$.push(data.data);
    this.isLoading = false;
  }
}
