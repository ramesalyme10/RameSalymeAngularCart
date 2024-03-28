import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../Models/Port';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  productsDetails: any;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private toast:ToastrService,
    private cart:CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getDetails(id);
  }

  getDetails(id: any) {
    this.productService.getDetailsProducts(id).subscribe({
      next: (res: any) => {
        this.productsDetails = res;
      },
      error: (err: any) => {
        this.toast.error("Somthing is Messing hear!")
      },
    });
  }

   addToCart(product:Product){
      this.cart.addtocart(product)
   }


}

