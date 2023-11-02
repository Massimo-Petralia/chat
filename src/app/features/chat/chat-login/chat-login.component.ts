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
  signInSucces: boolean = false;
  isEmpty: boolean = false;

  emptyFieldsMessage: string = 'fields can not be empty';
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

  onSignIn() {
    if (this.formSignIn.valid) {
      this.user.emit(this.formSignIn.value);
    } else {
      if (this.formSignIn.controls.password.value === '') {
        this.isEmpty = true;
        this.emptyFieldsMessage = 'password ' + this.emptyFieldsMessage;
      }
      if (this.formSignIn.controls.nick_name.value === '') {
        this.isEmpty = true;
        this.emptyFieldsMessage = 'nick name, ' + this.emptyFieldsMessage;
      }
      if (this.formSignIn.controls.name.value === '') {
        this.isEmpty = true;
        this.emptyFieldsMessage = 'name, ' + this.emptyFieldsMessage;
      }
    }
  }

  onLog() {
    // const formValue = JSON.stringify(this.formLog.value);
    // const comparisonValue = '{"name":"","nick_name":"","password":""}';
    // if (formValue === comparisonValue) {
    //   this.emptyFieldsMessage = true;
    //   return;
    // }
    // if (this.formLog.controls.nick_name.value === '') {
    //   this.emptyfield = true;
    //   return;
    // }
    this.user.emit(this.formLog.value);
  }
}
