import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: any;

  constructor(private auth: AngularFireAuth, private toast: ToastrService) {}

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.auth.authState;
  }

  signOut() {
    return this.auth.signOut();
  }
}
