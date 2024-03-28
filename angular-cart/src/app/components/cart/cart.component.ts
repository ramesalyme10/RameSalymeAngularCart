import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../Models/Port';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  isCart: boolean = true;
  carts: Product[] = [];
  cartsInfo: Product[] = [];
  totalItems!: number;
  constructor(
    public cart: CartService,
    
  ) {
    
  }

  ngOnInit(): void {
    this.carts = this.cart.productsList();
    if(this.carts){
      localStorage.setItem('carts', JSON.stringify(this.carts));
    }
    
  }

  onCart() {
    this.isCart = !this.isCart;
  }

  deleteProducts(id: string) {
    this.carts = this.carts.filter((cart: Product) => cart._id !== id);
  }

  increment(id: string) {
    let cart = this.carts.find((cart: Product) => cart._id === id);
    if (cart) {
      cart['qty'] += 1;
    }
  }

  decrement(id: string) {
    let cart = this.carts.find((cart: Product) => cart._id === id);
    if (cart) {
      cart['qty'] -= 1;
    }
  }


  deleteAllProducts(){
      this.carts = []
  }


}
