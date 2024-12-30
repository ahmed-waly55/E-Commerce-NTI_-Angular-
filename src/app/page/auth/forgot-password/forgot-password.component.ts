import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  sendMailFlag: boolean = false;
  verifyCodeFlag: boolean = false;
  completeSendFlag: boolean = false;
  emailError: string = '';

  constructor(private _authService: AuthService, private _router: Router,private toastr: ToastrService) {}

  

  forgetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })
  verifyCodeForm = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });
  resetPasswordForm = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });


  forgetPassword(formData: FormGroup) {
    this.completeSendFlag = true;
    this._authService.forgetPassword(formData.value).subscribe({
      next: res => {
        localStorage.setItem('reset', res.token);
        this.sendMailFlag = true;
        this.completeSendFlag = false;
        this.toastr.success("code send successful");


      },
      error: err => {
        this.emailError = err.error.message;
        this.completeSendFlag = false;
        this.toastr.error(err.error.message);

      }
    })
  }

  verifyCode(formData: FormGroup) {
    // console.log(formData)
    this._authService.verifyCode(formData.value).subscribe({
      next: res => {
        this.verifyCodeFlag = true;
        this.toastr.success('success code verified');
        // console.log(res)
      },
      error: err => {
        this.emailError = err.error.message;
        this.toastr.error(err.error.message);

        // console.log(err);
      }
    })
  }

  resetPassword(formData: FormGroup) {
    this._authService.resetPassword(formData.value).subscribe({
      next: res => {
        this.verifyCodeFlag = false;
        this.sendMailFlag = false;
        localStorage.removeItem('reset');
        this._router.navigate(['/account/login']);
      },
      error: err => {
        if (err.status === 403) this.emailError = err.error.message
        else this.emailError = err.error.errors[0].msg;
      }
    })
  }


}
