import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/modules/users/users.service';
import { UserModel } from 'src/app/modules/users/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  auth = getAuth();

  constructor(public router: Router) {}

  async signIn(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/');
  }

  get isLoggedIn(): UserModel | false {
    const user = JSON.parse(localStorage.getItem('user')!);
    return !!user ? user : false;
  }

  async signOut() {
    localStorage.removeItem('user');
    this.router.navigate(['auth', 'sign-in']);
  }
}
