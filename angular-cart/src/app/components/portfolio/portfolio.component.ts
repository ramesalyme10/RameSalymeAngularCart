import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Port } from '../../../Models/Port';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Activates } from '../../../Models/Activates';
import { Activate } from '../../../Models/Activate';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    PortfolioItemComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  slideConfig = { slidesToShow: 3, slidesToScroll: 1, autoplay: true,responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ] };
  ports: Port[] = [];
  categories: Port[] = [];
  products: Port[] = [];
  activates: Activate[] = Activates;

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.authservice.getPortfolio().subscribe((item) => {
      this.ports = item;
      this.categories = item;
    });
  }

  getCategories(category: string) {
    this.categories = this.ports.filter(
      (item) => item.category === category || category === ''
    );
  }
}
