import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {


  constructor() {}

  // Method for handling the OTP confirmation
  confirmOtp(otp: string[]) {
    console.log('Entered OTP:', otp.join(''));
    // Add logic to verify the OTP here
  }




  ngAfterViewInit() {
    const otpInputs = Array.from(document.querySelectorAll('.otp-box')) as HTMLInputElement[];
  
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        } else if (input.value.length === 0 && index > 0) {
          otpInputs[index - 1].focus();
        }
      });
    });
  }
  

}
