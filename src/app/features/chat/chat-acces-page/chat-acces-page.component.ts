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

  onSignIn(user: User) {
    this.subs.add(
      this.dataService.checkRegistration(user).subscribe((data) => {
        if (data.nick_name.length !== 0) {
          this.accessComponent.nickNameError = true;
        } else {
          this.accessComponent.nickNameError = false;
        }
        if (data.password.length !== 0) {
          this.accessComponent.passwordError = true;
        } else {
          this.accessComponent.passwordError = false;
        }

        if (data.nick_name.length !== 0 && data.password.length !== 0) {
          this.accessComponent.signInSucces = false;

          return;
        } else if (data.nick_name.length === 0 && data.password.length === 0) {
          this.accessComponent.signInSucces = true;
          this.accessComponent.formSignIn.reset();
          this.users.push(user);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
