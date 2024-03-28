import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css',
})
export class CreateProductsComponent implements OnInit {
  setfile: any;
  isLoading:boolean = false
  ngForm = this.fb.group({
    title: ['',[Validators.required,Validators.minLength,Validators.maxLength]],
    image: ['',[Validators.required]],
    description: ['',[Validators.required]],
    price: ['',[Validators.required]],
    rating: ['',[Validators.required]],
    category: ['',[Validators.required,Validators.minLength,Validators.maxLength]],
  });
  submitted = false;
  constructor(
    private productService: ProductsService,
    private fb: FormBuilder,
    private router:Router
  ) {}


  get f(): { [key: string]: AbstractControl } {
    return this.ngForm.controls;
  }

  get image(): {[key:string]: AbstractControl} {
     return this.ngForm.controls
  }


  get description(): {[key:string]: AbstractControl} {
     return this.ngForm.controls
  }

  get price(): {[key:string]: AbstractControl} {
     return this.ngForm.controls
  }
  get rating(): {[key:string]: AbstractControl} {
     return this.ngForm.controls
  }
  get category(): {[key:string]: AbstractControl} {
     return this.ngForm.controls
  }
 

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true
    if(this.ngForm.invalid){
      const form = this.ngForm.value
      this.isLoading = false
      this.productService.CreateProducts(form).subscribe({
        next:(res:any) =>{
           if(res){
              this.router.navigateByUrl('/shop')
               this.isLoading = false
 
           }
        },
        error:(err:any) =>{
          alert('Please Fill Your Products')
        }
      })
    }
  }
}
