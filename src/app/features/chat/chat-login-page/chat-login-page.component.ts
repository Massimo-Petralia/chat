import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-login-page',
  templateUrl: './chat-login-page.component.html',
  styleUrls: ['./chat-login-page.component.scss'],
})
export class ChatLoginPageComponent implements OnDestroy {
  constructor(private dataService: DataService, private router: Router) {}

  users: User[] = []

  subs = new Subscription();

  onLog(user: User) {
    
    this.subs.add(this.dataService.createUser(user).subscribe((user) => {
      this.users.push(user)
      this.router.navigate(['/user-list-page', user.nick_name])
    }));
  }
ngOnDestroy(): void {
  this.subs.unsubscribe()
}
}
