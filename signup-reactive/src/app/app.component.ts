import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.registrationForm = this.fb.group({
      firstName: ['asdasdasd', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email, Validators.required],
      password: ['', Validators.pattern],
      confirmPassword: ['', Validators.required],
      acceptTnC: ['', Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) return;

    console.table(this.registrationForm);
    console.table(this.registrationForm.value);

    alert('Successfully submitted');
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
