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

  signInNickNameError?: boolean = false;
  signInPasswordError?: boolean = false;
  signInSucces?: boolean = false;
  
  signInNameEmpty: boolean = false;
  signInNick_nameEmpty: boolean = false;
  signInPasswordEmpty: boolean = false;

  logNick_nameEmpty: boolean = false;
  logPasswordEmpty: boolean = false;

  logNick_nameError: boolean = false;
  logPasswordError: boolean = false

  //emptyfield: boolean = false;

  @Output() signInUser = new EventEmitter<User>();
  @Output() logUser = new EventEmitter<User>()

  formSignIn = this.formBuilder.group({
    name: this.formBuilder.control<string>('', Validators.required),
    nick_name: this.formBuilder.control<string>('', Validators.required),
    password: this.formBuilder.control<string>('', Validators.required),
  });

  formLog = this.formBuilder.group({
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
      this.signInUser.emit(this.formSignIn.value);
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
      this.logUser.emit(this.formLog.value);

    } else {
      if (this.formLog.controls.password.value === '') {
        this.logPasswordEmpty = true;
      } else {
        this.logPasswordEmpty = false;
      }
      if (this.formLog.controls.nick_name.value === '') {
        this.logNick_nameEmpty = true;
      } else {
        this.logNick_nameEmpty = false;
      }
   
    }
  }
}
