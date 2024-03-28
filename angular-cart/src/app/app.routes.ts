import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'create-products',
    component: CreateProductsComponent,
  },
  {
    path: 'productsDetails/:id',
    component: ProductsDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
