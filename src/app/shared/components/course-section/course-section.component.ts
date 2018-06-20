import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css']
})
export class CourseSectionComponent implements OnInit {
  courses: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
