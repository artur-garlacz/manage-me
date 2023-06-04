import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { SignInForm } from 'src/app/modules/auth/models/sign-in-form.model';
import { UserService } from 'src/app/modules/users/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public userService: UserService,
    private fb: FormBuilder
  ) {}
  form!: FormGroup<SignInForm>;
  errorMessage?: string;

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { userName, password } = this.form.value;
    if (userName && password) {
      this.userService.findUserByCredentials(userName, password).subscribe(
        (users) => {
          if (users.length > 0) {
            const user = users[0];
            this.authService.signIn(user);
          } else {
            this.errorMessage = 'Invalid creditentials.';
          }
        },
        () => {
          this.errorMessage = 'There was an error try again later.';
        }
      );
    }
  }
}
