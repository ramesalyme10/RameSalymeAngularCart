import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Manager } from '../../../Models/manager';
import { Managers } from '../../../Models/managers';
import { Sort } from '../../../Models/Sort';
import { Sorts } from '../../../Models/Sorts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltersPipe } from '../../filters.pipe';




@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule,FormsModule,FiltersPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  slideConfig = { slidesToShow: 1, slidesToScroll: 1 , autoplay:true};
  managers: Manager[] = Managers
  sorts:Sort[] = Sorts
  searchTerm:string = ''

  constructor(){}
  ngOnInit(): void {
    
  }
 

}
