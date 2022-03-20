import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './validators/password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTnC: ['', Validators.requiredTrue],
      },
      {
        validators: passwordValidator,
      }
    );
  }

  onSubmit() {
    console.log('inside submit');

    this.submitted = true;
    if (this.registrationForm.invalid) {
      console.dir(this.registrationForm.errors);
      return;
    }

    console.dir(this.registrationForm);
    console.table(this.registrationForm.value);

    alert('Successfully submitted');
  }

  get h() {
    return this.registrationForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
