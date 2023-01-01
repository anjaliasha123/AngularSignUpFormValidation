import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchingPasswords } from '../validators/matching-passwords';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  authForm = new FormGroup({
    userName: new FormControl('',[
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.required,
      Validators.pattern(/[a-z0-9]/)
    ],[this.usernameValidate.validate]),
    password: new FormControl('',[
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.required
    ]),
    passwordConfirmation: new FormControl('',[
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.required
    ])
  },{validators: [this.matchPassword.validate]});

  constructor(private matchPassword: MatchingPasswords, private usernameValidate:UniqueUsername){}

}
