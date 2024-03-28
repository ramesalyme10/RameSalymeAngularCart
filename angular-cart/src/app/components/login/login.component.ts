import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userInfo:any = [];
  submitted:boolean = false
  loginData = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private toast: ToastrService,
    @Inject(DOCUMENT) private document:Document,
    private router: Router,
  ) {
    const localStorage = document.defaultView?.localStorage
    if(localStorage){
      const user = localStorage.getItem('user')
       if(user !== null){
          this.userInfo = JSON.parse(user)
          
          
       }
    }
  }

  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.loginData.controls;
  }

  onLogin() {
    this.submitted = true
    const data = this.loginData.value;
    this.authservice.login(data).subscribe(
      (response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.toast.success('Users sent Successfully');
          this.router.navigateByUrl('/shop');
          setTimeout(() =>{
            window.location.reload()
          },100)
        }
      },
      (error) => {
        this.toast.error('Invalid Email && Password');
        
      }
    );
  }
}


