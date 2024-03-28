import { Component, EventEmitter, Input,Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../Models/Port';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.css'
})
export class ShopItemsComponent {
  @Input()
  product!: Product;
    @Output() onDelete:EventEmitter<Product> = new EventEmitter()
    @Output() onAdd:EventEmitter<Product> = new EventEmitter()
    DeleteProducts(id:any){
        this.onDelete.emit(id)
    }

    AddProducts(product:Product){
       this.onAdd.emit(product)
    }
}
