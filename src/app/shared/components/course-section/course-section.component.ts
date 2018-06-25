import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import 'slick-carousel';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css']
})
export class CourseSectionComponent implements OnInit {
  courses: Array<any> = [];
  constructor(private course: CourseService) { }

  ngOnInit() {
    this.course.getCourses()
                .subscribe(response => this.handleResponse(response));
  }

  handleResponse(data) {
    this.courses = data.data;
  }

}
