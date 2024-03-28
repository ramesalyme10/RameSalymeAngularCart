import { Injectable } from '@angular/core';
import { Product } from '../../Models/Port';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Product[] = []
  constructor() { }


   addtocart(product:Product){
      return this.cartItems.push({...product, qty:1})
     
   }

   productsList(){
     return this.cartItems
     
   }

    getTotalPrice(){
       return this.cartItems.reduce((a,b) => a + b.price * b['qty'],0)
    }
}
