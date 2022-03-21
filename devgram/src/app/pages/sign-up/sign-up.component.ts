import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm){
    console.log(f);
    const {email, password} = f.form.value
    // TODO: passowrd validation
    this.auth.signUp(email, password)
    .then((res)=> {
      console.log(res);
      this.router.navigateByUrl('/')
    })
    .catch(err=>{
      console.error(err);
      this.toast.error('Signup failed')
    })
  }
}
