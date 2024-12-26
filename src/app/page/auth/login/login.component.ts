import { Component, inject } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private _authService: AuthService, private _router: Router,private toastr: ToastrService){

  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })
  
login(formData:FormGroup){
  this._authService.login(formData.value).subscribe({
    next:(res) => {
      localStorage.setItem('token', res.token);
        this._router.navigate(['/home'])
        this.toastr.success("login successful");
        // this.toastr.success(res);

      
    },
    error:err =>{
      // console.log(err.error);
      this.toastr.error(err.error.message);


      
    }
  })
  // console.log(formData)
}
}
 