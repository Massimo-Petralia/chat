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
  
  signInNameEmpty: boolean = false;
  signInNick_nameEmpty: boolean = false;
  signInPasswordEmpty: boolean = false;

  LogNameEmpty: boolean = false;
  LogNick_nameEmpty: boolean = false;
  LogPasswordEmpty: boolean = false;

  emptyfield: boolean = false;
  @Output() user = new EventEmitter<User>();

  formSignIn = this.formBuilder.group({
    name: this.formBuilder.control<string>('', Validators.required),
    nick_name: this.formBuilder.control<string>('', Validators.required),
    password: this.formBuilder.control<string>('', Validators.required),
  });

  formLog = this.formBuilder.group({
    name: this.formBuilder.control<string>('', Validators.required),
    nick_name: this.formBuilder.control<string>('', Validators.required),
    password: this.formBuilder.control<string>('', Validators.required),
  });

  resetSignInAlertView() {
    this.signInNameEmpty = false;
    this.signInNick_nameEmpty = false;
    this.signInPasswordEmpty = false;
  }
  onSignIn() {
    if (this.formSignIn.valid) {
      this.user.emit(this.formSignIn.value);
      this.resetSignInAlertView();
    } else {
      if (this.formSignIn.controls.password.value === '') {
        this.signInPasswordEmpty = true;
      } else {
        this.signInPasswordEmpty = false;
      }
      if (this.formSignIn.controls.nick_name.value === '') {
        this.signInNick_nameEmpty = true;
      } else {
        this.signInNick_nameEmpty = false;
      }
      if (this.formSignIn.controls.name.value === '') {
        this.signInNameEmpty = true;
      } else {
        this.signInNameEmpty = false;
      }
    }
  }

  onLog() {
    if(this.formLog.valid){
      this.user.emit(this.formLog.value);

    } else {
      if (this.formLog.controls.password.value === '') {
        this.LogPasswordEmpty = true;
      } else {
        this.LogPasswordEmpty = false;
      }
      if (this.formLog.controls.nick_name.value === '') {
        this.LogNick_nameEmpty = true;
      } else {
        this.LogNick_nameEmpty = false;
      }
      if (this.formLog.controls.name.value === '') {
        this.LogNameEmpty = true;
      } else {
        this.LogNameEmpty = false;
      }
    }
  }
}
