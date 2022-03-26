import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    // TODO: form sanitization

    this.auth
      .signIn(email, password)
      .then((res) => {
        console.log(res);
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.error(err);
        this.toast.error(err);
      });
  }
}
