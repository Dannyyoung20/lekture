import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bigslide';
import 'slick-carousel';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button-toggle').bigSlide();

    $('.course-slide').slick({
      // normal options...
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      prevArrow: `<i class="icon ion-android-arrow-back slide__left-arrow"></i>`,
      nextArrow: `<i class="icon ion-android-arrow-forward slide__right-arrow"></i>`,

      // the magic
      responsive: [{
          breakpoint: 600,
          settings: 'unslick' // destroys slick

        }]
    });
  }

}
