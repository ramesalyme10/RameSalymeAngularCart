import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Teast } from '../../../Models/Teast';
import { Teasts } from '../../../Models/Teasts';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterModule, SlickCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  slideConfig = { slidesToShow: 3, slidesToScroll: 1, autoplay: true };
  teasts: Teast[] = Teasts;

  
}
