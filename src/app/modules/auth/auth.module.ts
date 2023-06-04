import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { SignInComponent } from 'src/app/modules/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/modules/auth/components/sign-up/sign-up.component';

const routes: Routes = [
  // { path: '', redirectTo: 'sign-in' },
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  //   { path: 'forgot-password', component: ForgotPasswordComponent },
  //   { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [AuthService],
})
export class AuthModule {}
