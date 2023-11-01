import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserListPageComponent } from './chat-user-list-page.component';

describe('ChatUserListPageComponent', () => {
  let component: ChatUserListPageComponent;
  let fixture: ComponentFixture<ChatUserListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatUserListPageComponent]
    });
    fixture = TestBed.createComponent(ChatUserListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
