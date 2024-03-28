import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Team } from '../../../Models/Team';
import { Teams } from '../../../Models/Teams';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule,CommonModule,SlickCarouselModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  slideConfig = { slidesToShow: 4, slidesToScroll: 1 , autoplay:true,responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]};
  teams:Team[] = Teams
}
