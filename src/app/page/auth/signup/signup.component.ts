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
    password:new FormControl(null,[Validators.required,Validators.maxLength(6)]),
    confirmPassword :new FormControl(null,[Validators.required,Validators.maxLength(6)])

  });

  signup(formData:FormGroup){
    this._authService.signup(formData.value).subscribe({
      next:(res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
      },
      error:err =>{
        this.toastr.error(err.error.message);

      }
    })
  }
  ngOnInit() {
    
  }
}

