import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ChatLoginComponent } from '../chat-login/chat-login.component';

@Component({
  selector: 'app-chat-login-page',
  templateUrl: './chat-login-page.component.html',
  styleUrls: ['./chat-login-page.component.scss'],
})
export class ChatLoginPageComponent implements OnDestroy {
  constructor(private dataService: DataService, private router: Router) {}
  @ViewChild(ChatLoginComponent) accessComponent!: ChatLoginComponent;
  users: User[] = [];

  subs = new Subscription();

  onSignIn(user: User) {
    this.subs.add(
      this.dataService
        .checkProperty(user, 'nick_name')
        .subscribe((response) => {
          this.accessComponent.nickNameError = false;
          this.accessComponent.passwordError = false
          const responseArray: User[] | [] = response;
          if (responseArray.length !== 0) {
            this.accessComponent.nickNameError = true;
            return;
          } else {
            this.dataService.checkPassword(user).subscribe((response) => {
              const responseArray: User[] | [] = response;
              if (responseArray.length !== 0) {
                this.accessComponent.passwordError = true
                return;
              } else {
                this.dataService.createUser(user).subscribe((user) => {
                  this.users.push(user);
                  this.accessComponent.signInSucces = true
                
                  //this.router.navigate(['/user-list-page', user.nick_name])
                });
              }
            });
          }
        })
    );
  }

  // onLogIn(user: User) {
  //   this.subs.add(
  //     this.dataService.findsUser(user).subscribe((response) => {
  //       console.log('search response: ', user);
  //       if (response.length !== 0) {
  //         // for ?
  //         for (const item in response) {
  //           this.users.push(JSON.parse(item));
  //         }
  //         this.router.navigate(['/user-list-page', user.nick_name]);
  //       } else {
  //         this.dataService.createUser(user).subscribe((user) => {
  //           this.users.push(user);
  //           this.router.navigate(['/user-list-page', user.nick_name]);
  //         });
  //       }
  //     })
  //   );
  // }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
