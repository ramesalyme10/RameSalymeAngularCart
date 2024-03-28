import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { passwordMatchValidator } from '../../../confirmPasswordValidator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  userMessage: any = [];
  userInfo: any = [];
  formData!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private toast: ToastrService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
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
    this.formData = this.fb.group(
      {
        name: [
          '',
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        password: ['', Validators.required],
        confirmPassword: ['', [Validators.required]],
      },
      {
        Validators: passwordMatchValidator,
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  onGroup() {
    this.submitted = true;
    if (this.formData.invalid) {
      const Data = this.formData.value;

      this.authservice.createUsers(Data).subscribe(
        (results) => {
          this.userMessage = results;

          if (this.userMessage) {
            localStorage.setItem('user', JSON.stringify(this.userMessage));
            this.toast.success('Users sent Successfully');
            this.router.navigate(['/login']);
          }
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    }
  }
}
