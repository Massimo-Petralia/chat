import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat-user-list-page',
  templateUrl: './chat-user-list-page.component.html',
  styleUrls: ['./chat-user-list-page.component.scss'],
})
export class ChatUserListPageComponent implements OnInit, OnDestroy {
  users: User[] = [];

  totalUsers?: number;

  constructor(private dataService: DataService) {}

  subs = new Subscription();

  ngOnInit(): void {
    const firstPage: number = 1;
    this.onPaginate(firstPage);
  }

  onPaginate(page: number) {
    this.dataService.getUsers(page).subscribe((response) => {
      const xTotalCount = response.headers.get('X-total-count');
      if (xTotalCount) {
        this.totalUsers = Number(xTotalCount);
        this.users = response.body!;
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
