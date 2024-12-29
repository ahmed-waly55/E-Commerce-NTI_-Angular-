import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
 
  constructor(private _authService:AuthService ,private _router:Router ,private _HTTPClient:HttpClient,private toastr: ToastrService){
   
  }

  signupForm = new FormGroup({
    username:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    name:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    confirmPassword :new FormControl(null,[Validators.required,Validators.minLength(6)])

  });

  usernameError: string = '';
  nameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';



  signup(formData:FormGroup){
    this._authService.signup(formData.value).subscribe({
      next:(res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
        this.toastr.success("Successful Registration");
        this._authService.saveLogin();

      },
      error:err =>{
        // console.log(err.error.errors);
        if (err.error.errors) {
          err.error.errors.map((error: any) => {
            if (error.path === 'username') this.usernameError = error.msg
            else if (error.path === 'name') this.nameError = error.msg
            else if (error.path === 'email') this.emailError = error.msg
            else if (error.path === 'password') this.passwordError = error.msg
            else if (error.path === 'confirmPassword') this.confirmPasswordError = error.msg
          })
        }
      }
    })
  }
  ngOnInit() {
    
  }
}

