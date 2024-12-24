import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })
  

}
 