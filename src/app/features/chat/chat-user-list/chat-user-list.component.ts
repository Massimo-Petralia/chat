import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss'],
})
export class ChatUserListComponent implements OnInit {
  @Input() users: User[] = [];

  @Output() page = new EventEmitter<number>();

  loggedInUser?: string | null = '';

  @Input() totalUsers?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.loggedInUser = routeParams.get('logged-in-user');
  }

  paginateData(page: number) {
    this.page.emit(page);
  }
}
