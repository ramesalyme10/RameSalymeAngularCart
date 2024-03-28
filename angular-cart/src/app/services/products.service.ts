import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../Models/Port';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    url = "http://localhost:5000/api/products"


  constructor(private Http:HttpClient) { }

    getProducts():Observable<Product[]>{
       return this.Http.get<Product[]>(this.url)
    }

   CreateProducts(formData:any):Observable<Product[]>{
       return this.Http.post<Product[]>(`${this.url}/post`,formData)
   }

   getDetailsProducts(id:string):Observable<Product[]>{
      return this.Http.get<Product[]>(`${this.url}/details/${id}`)
   }

   DeleteProducts(id:Product):Observable<Product[]>{
       return this.Http.delete<Product[]>(`${this.url}/${id}`) 
   }

   EditProducts(id:Product,product:Product):Observable<Product[]>{
       return this.Http.put<Product[]>(`${this.url}/${id}`,product)
   }

   
}
