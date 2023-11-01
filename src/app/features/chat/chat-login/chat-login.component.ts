import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss'],
})
export class ChatLoginComponent {
  constructor(private formBuilder: FormBuilder) {}


  emptyFieldsMessage: boolean = false;
  emptyfield: boolean = false
  @Output() user = new EventEmitter<User>();


  formSignIn = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    nick_name: this.formBuilder.control<string>(''),
    password: this.formBuilder.control<string>(''),
  })

  formLog = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    nick_name: this.formBuilder.control<string>(''),
    password: this.formBuilder.control<string>(''),
  });

onSignIn(){
  this.user.emit(this.formSignIn.value)
}

  onLog() {
    const formValue = JSON.stringify(this.formLog.value);
    const comparisonValue = '{"name":"","nick_name":"","password":""}';
    if (formValue === comparisonValue) {
      this.emptyFieldsMessage = true;
      return;
    };
    if(this.formLog.controls.nick_name.value === ''){
      this.emptyfield = true
      return
    }
    this.user.emit(this.formLog.value);
  }
}
