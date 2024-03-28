import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopItemsComponent } from '../shop-items/shop-items.component';
import { ProductsService } from '../../services/products.service';
import { ProductsPipePipe } from '../../products-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../Models/Port';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ShopItemsComponent,
    ProductsPipePipe,
    FormsModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  isGender: boolean = false;
  isSale: boolean = false;
  isProduct: boolean = false;
  products: Product[] = [];
  categories: Product[] = [];
  Error: string = '';
  filterSearch: string = '';
  MessageDeleteError: string = '';
  carts:Product[] = []
  constructor(
    private productService: ProductsService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        this.products = response;
        this.categories = response;
      },
      error: (err: any) => {
        this.Error = err.error.message;
      },
    });
  }

  getCategories(category: string) {
    this.categories = this.products.filter(
      (item: any) => item.category === category || category === ''
    );
  }

  productsDelete(id: any) {
    this.productService.DeleteProducts(id).subscribe({
      next: (response: any) => {
        if (response) {
          window.confirm('Do you really want to Delete it?');
          this.getProducts();
        }
      },
      error: (error: any) => {
        this.MessageDeleteError = error.error.message;
        alert(this.MessageDeleteError);
      },
    });
  }

  onGender() {
    this.isGender = !this.isGender;
  }

  onSale() {
    this.isSale = !this.isSale;
  }

  onProduct() {
    this.isProduct = !this.isProduct;
  }

  onAddProduct(product: Product) {
     this.cart.addtocart(product)
  }

 
}
