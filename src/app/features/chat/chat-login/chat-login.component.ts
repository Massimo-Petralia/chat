import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss'],
})
export class ChatLoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  nickNameError: boolean = false;
  passwordError: boolean = false;
  nameEmpty: boolean = false;
  nick_nameEmpty: boolean = false;
  passwordEmpty: boolean = false;
  signInSucces: boolean = false;

  emptyfield: boolean = false;
  @Output() user = new EventEmitter<User>();

  formSignIn = this.formBuilder.group({
    name: this.formBuilder.control<string>('', Validators.required),
    nick_name: this.formBuilder.control<string>('', Validators.required),
    password: this.formBuilder.control<string>('', Validators.required),
  });

  formLog = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    nick_name: this.formBuilder.control<string>(''),
    password: this.formBuilder.control<string>(''),
  });

  reset() {
    this.nameEmpty = false;
    this.nick_nameEmpty = false;
    this.passwordEmpty = false;
  }
  onSignIn() {
    if (this.formSignIn.valid) {
      this.reset();
      this.user.emit(this.formSignIn.value);
    } else {
      if (this.formSignIn.controls.password.value === '') {
        this.passwordEmpty = true;
      } else {
        this.passwordEmpty = false;
      }
      if (this.formSignIn.controls.nick_name.value === '') {
        this.nick_nameEmpty = true;
      } else {
        this.nick_nameEmpty = false;
      }
      if (this.formSignIn.controls.name.value === '') {
        this.nameEmpty = true;
      } else {
        this.nameEmpty = false;
      }
    }
  }

  onLog() {
    this.user.emit(this.formLog.value);
  }
}
