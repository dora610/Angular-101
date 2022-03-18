import { FormGroup, ValidatorFn } from '@angular/forms';

const passwordValidator = (controlName: string, compareControlName: string) => {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const cnfPassword = formGroup.controls[compareControlName];

    if (password !== cnfPassword) {
      cnfPassword.setErrors({ mustMatch: true });
    } else {
      cnfPassword.setErrors(null);
    }
  };
};

export { passwordValidator };
