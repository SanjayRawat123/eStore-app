import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/home/services/user/user-service.service';
import { UserLogin, LoginToken } from 'src/app/home/types/user.type';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  alertType: number = 0;
  alertMessage: string = '';
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email(): AbstractControl<any, any> | null {
    return this.userLoginForm.get('email');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userLoginForm.get('password');
  }

  onSubmit(): void {
    this.userService.login(this.email?.value, this.password?.value).subscribe({
      next: (result: LoginToken) => {
        // this.userService.activateToken(result);
        this.alertType = 0;
        this.alertMessage = 'Login successful';
      },
      error: (error) => {
        this.alertType = 2;
        this.alertMessage = error.error.message;
      },
    });
  }
}
