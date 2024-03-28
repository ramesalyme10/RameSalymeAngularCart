import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../Models/Slide';
import { Slides } from '../../../Models/Slides';
import { SlickCarouselModule } from 'ngx-slick-carousel';
 import  $ from 'jquery'
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 , autoplay:true};
  slides: Slide[] = Slides;

      ngOnInit(): void {
        
     
      
  }
}
