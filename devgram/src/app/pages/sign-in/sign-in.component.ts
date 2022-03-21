import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm){
    console.log(f);
    const {email, password } = f.form.value
    // TODO: form validation
    this.auth.signIn(email,password)
    .then((res)=>{
      console.log(res);
      this.toast.success('Successfully signedin')
      this.router.navigateByUrl('/')
      
    }).catch(err=>{
      console.error(err);
      this.toast.error('Error occurred!')
      
    })
    
  }
  
}
