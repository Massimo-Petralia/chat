import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat-login',
  templateUrl: './chat-login.component.html',
  styleUrls: ['./chat-login.component.scss']
})
export class ChatLoginComponent {

  constructor(private formBuilder: FormBuilder){}

  //user?: User

  @Output() user = new EventEmitter<User>()

  form = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    nick_name: this.formBuilder.control<string>(''),
    password: this.formBuilder.control<string>(''),
  })

onLog() {
  this.user.emit(this.form.value)
}
  

}
