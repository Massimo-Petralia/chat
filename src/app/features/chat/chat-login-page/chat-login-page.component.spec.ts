import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLoginPageComponent } from './chat-login-page.component';

describe('ChatPageComponent', () => {
  let component: ChatLoginPageComponent;
  let fixture: ComponentFixture<ChatLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatLoginPageComponent]
    });
    fixture = TestBed.createComponent(ChatLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
