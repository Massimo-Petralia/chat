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

  //user?: User

  emptyFieldsMessage: boolean = false;
  @Output() user = new EventEmitter<User>();

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    nick_name: this.formBuilder.control<string>(''),
    password: this.formBuilder.control<string>(''),
  });

  onLog() {
    const formValue = JSON.stringify(this.form.value);
    const comparisonValue = '{"name":"","nick_name":"","password":""}';
    if (formValue === comparisonValue) {
      debugger;
      this.emptyFieldsMessage = true;
      return;
    } else {
      this.user.emit(this.form.value);
    }
  }
}
