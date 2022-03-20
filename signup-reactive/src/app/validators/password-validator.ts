import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { mustMatch: true }
    : null;
};

export { passwordValidator };
