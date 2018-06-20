import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bigslide';
import '../../../../assets/js/navScroll.js';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('.button-toggle').bigSlide();
  }

}
