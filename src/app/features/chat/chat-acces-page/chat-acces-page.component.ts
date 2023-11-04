import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ChatAccesComponent } from '../chat-acces/chat-acces.component';

@Component({
  selector: 'app-chat-acces-page',
  templateUrl: './chat-acces-page.component.html',
  styleUrls: ['./chat-acces-page.component.scss'],
})
export class ChatAccesPageComponent implements OnDestroy {
  constructor(private dataService: DataService, private router: Router) {}
  @ViewChild(ChatAccesComponent) accessComponent!: ChatAccesComponent;
  users: User[] = [];

  subs = new Subscription();

  // resetAlertView(
  //   nick_name?: boolean,
  //   password?: boolean,
  //   signInSucces?: boolean
  // ) {
  //   this.accessComponent.nickNameError = nick_name;
  //   this.accessComponent.passwordError = password;
  //   this.accessComponent.signInSucces = signInSucces;
  // }

  onSignIn(signInUser: User) {
    this.subs.add(
      this.dataService.checkRegistration(signInUser).subscribe((data) => {
        if (data.nick_name.length !== 0) {
          this.accessComponent.signInNickNameError = true;
        } else {
          this.accessComponent.signInNickNameError = false;
        }
        if (data.password.length !== 0) {
          this.accessComponent.signInPasswordError = true;
        } else {
          this.accessComponent.signInPasswordError = false;
        }

        if (data.nick_name.length !== 0 && data.password.length !== 0) {
          this.accessComponent.signInSucces = false;

          return;
        } else if (data.nick_name.length === 0 && data.password.length === 0) {
          this.dataService.createUser(signInUser).subscribe(() => {
            this.accessComponent.signInSucces = true;
           // this.users.push(_user);
          });
          this.accessComponent.formSignIn.reset();
        }
      })
    );
  }

  onLog(logUser: User) {
    this.subs.add(
      this.dataService.checkLogIn(logUser).subscribe((data)=>{
        if(data.nick_name.length === 0) {
          this.accessComponent.logNick_nameError = true
        }else {this.accessComponent.logNick_nameError = false
        }
        if(data.password.length === 0) {
          this.accessComponent.logPasswordError = true
        }else {this.accessComponent.logPasswordError = false}
        if(data.nick_name.length === 0 && data.password.length === 0){
          console.error('the authentication data provided is incorrect')
          return
        }else if (data.nick_name.length !== 0 && data.password.length !== 0) {
          const loggedUser = data.password[0]
          this.users.push(loggedUser)
          
          console.log('check log server response: ', data.password[0])

        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
