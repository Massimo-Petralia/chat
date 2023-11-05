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

  loggedUser: User = {};

  subs = new Subscription();

  onSignIn(signInUser: User) {
    this.subs.add(
      this.dataService.checkRegistration(signInUser).subscribe((data) => {
        const nick_name = data.nick_name;
        const password = data.password;
        let accessComponent = this.accessComponent;

        if (nick_name === true) {
          accessComponent.signInNickNameError = true;
          this.accessComponent.signInNickNameError = true;
        } else accessComponent.signInNickNameError = false;

        if (password === true) {
          accessComponent.signInPasswordError = true;
        } else accessComponent.signInPasswordError = false;

        if (nick_name === true && password === true) {
          accessComponent.signInSucces = false;
          return;
        } else {
          this.dataService.createUser(signInUser).subscribe();
          accessComponent.signInSucces = true;
          accessComponent.formSignIn.reset();
        }
      })
    )
  }

  onLog(logUser: User) {
    this.subs.add(
      this.dataService.checkLogIn(logUser).subscribe((data) => {
        if (data.nick_name.length === 0) {
          this.accessComponent.logNick_nameError = true;
        } else {
          this.accessComponent.logNick_nameError = false;
        }
        if (data.password.length === 0) {
          this.accessComponent.logPasswordError = true;
        } else {
          this.accessComponent.logPasswordError = false;
        }
        if (data.nick_name.length === 0 && data.password.length === 0) {
          console.error('the authentication data provided is incorrect');
          return;
        } else if (data.nick_name.length !== 0 && data.password.length !== 0) {
          this.loggedUser = data.password[0];
          this.router.navigate(['user-list-page', this.loggedUser.nick_name]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
