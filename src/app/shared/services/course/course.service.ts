import { baseApiUrl } from './../../general/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(`${baseApiUrl}/courses`);
  }
}
