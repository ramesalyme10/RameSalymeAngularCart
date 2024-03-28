import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../Models/Port';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isToggle: boolean = false;
  userInfo: any = [];
  carts:Product[] = []
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private cart:CartService
  ) {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage) {
      const user = localStorage.getItem('user');
      if (user !== null) {
        this.userInfo = JSON.parse(user);
      }
    }
  }

  ngOnInit(): void {
     this.carts = this.cart.productsList()
  }

  onToggle() {
    this.isToggle = !this.isToggle;
  }

  onLogOut() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
     setTimeout(() =>{
       window.location.reload()
     },100)
  }


 

}
