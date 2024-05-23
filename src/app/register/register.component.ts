import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { user } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

  constructor(private formBuilder: FormBuilder,
    private _Registerservice: RegisterService,
    private router: Router) {
    this.addForm = this.formBuilder.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]],
      Cpass: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.addForm.valid) {
      this._Registerservice.createuser(this.addForm.value)
        .subscribe((data: user) => {
          this.router.navigate(['login-form']);
        });
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('pass');
    const confirmPassword = formGroup.get('Cpass');

    // Nullish check for confirmPassword
    if (confirmPassword) {
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ 'passwordMismatch': true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }


  getErrorMessage(controlName: string) {
    const control = this.addForm.get(controlName);
    if (control) {
      if (control.hasError('required')) {
        return 'This field is required';
      } else if (control.hasError('email')) {
        return 'Invalid email address';
      } else if (control.hasError('pattern')) {
        return 'Invalid input';
      } else if (control.hasError('minlength')) {
        return 'Minimum length is 8 characters';
      } else if (control.hasError('passwordMismatch')) {
        return 'Passwords do not match';
      }
    }
    return '';
  }
}
