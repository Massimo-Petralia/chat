import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-acces',
  templateUrl: './chat-acces.component.html',
  styleUrls: ['./chat-acces.component.scss'],
})
export class ChatAccesComponent {
  constructor(private formBuilder: FormBuilder) {}

  nickNameError?: boolean = false;
  passwordError?: boolean = false;
  signInSucces?: boolean = false;
  
  nameEmpty: boolean = false;
  nick_nameEmpty: boolean = false;
  passwordEmpty: boolean = false;

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

  resetAlertView() {
    this.nameEmpty = false;
    this.nick_nameEmpty = false;
    this.passwordEmpty = false;
  }
  onSignIn() {
    if (this.formSignIn.valid) {
      this.user.emit(this.formSignIn.value);
      this.resetAlertView();
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
