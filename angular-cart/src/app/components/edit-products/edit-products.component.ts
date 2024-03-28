import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css',
})
export class EditProductsComponent implements OnInit {
  setProductsUpdate: any;
  isLoading: boolean = false;
  ngForm!: FormGroup;
  required: any;
  title: any;
  id: any;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private toast:ToastrService
  ) {
    this.ngForm = this.fb.group({
      title: [''],
      image: [''],
      description: ['',Validators.required],
      price: [''],
      rating: [''],
      category: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
     this.getDetailsProducts(this.id);
    
    
  }

  getDetailsProducts(id: any) {
    this.productService.getDetailsProducts(id).subscribe({
      next: (response: any) => {
        this.setProductsUpdate = response;
        this.ngForm.patchValue(this.setProductsUpdate)
      },
      error: (error: any) => {
        this.toast.error('Something is Messing')
      },
    });
  }

 

  onSubmit() {
    const dataForm = this.ngForm.value;
       
    this.productService.EditProducts(this.id, dataForm).subscribe({
      next: (res: any) => {
        if (res) {
          this.router.navigateByUrl('/shop');
          this.toast.success('Products Updated Successfully')
        }
      },
      error: (error: any) => {
        this.toast.error("Somthing Went Wrong!")
      },
    });
  }
}
