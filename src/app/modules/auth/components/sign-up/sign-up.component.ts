import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { SignUpForm } from 'src/app/modules/auth/models/sign-up-form.model';
import { UserRole } from 'src/app/modules/users/models/user.model';
import { UserService } from 'src/app/modules/users/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  form!: FormGroup<SignUpForm>;

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const { firstName, lastName, password, userName } = this.form.value;

    this.userService
      .addUser({
        firstName: firstName ?? '',
        lastName: lastName ?? '',
        password: password ?? '',
        userName: userName ?? '',
        role: UserRole.DEV,
      })
      .then(() => {
        this.router.navigateByUrl('/auth/sign-in');
      });
  }
}
