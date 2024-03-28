import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Port } from '../../../Models/Port';


@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {
    @Input() item:any = []
}
