import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-chat-user-list-page',
  templateUrl: './chat-user-list-page.component.html',
  styleUrls: ['./chat-user-list-page.component.scss']
})
export class ChatUserListPageComponent implements OnInit, OnDestroy {

  users: User[] = []

  constructor(private dataService: DataService){}

  subs = new Subscription()

  ngOnInit(): void {
    this.subs.add(
      this.dataService.getUsers().subscribe((users)=>{
        this.users = users
      })
    )
  }

ngOnDestroy(): void {
  this.subs.unsubscribe()
}
}
