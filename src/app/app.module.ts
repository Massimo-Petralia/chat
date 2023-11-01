import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatLoginComponent } from './features/chat/chat-login/chat-login.component';
import { ChatLoginPageComponent } from './features/chat/chat-login-page/chat-login-page.component';
import { ChatUserListComponent } from './features/chat/chat-user-list/chat-user-list.component';
import { ChatUserListPageComponent } from './features/chat/chat-user-list-page/chat-user-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatLoginComponent,
    ChatLoginPageComponent,
    ChatUserListComponent,
    ChatUserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ChatLoginPageComponent},
      {path: 'user-list-page', component: ChatUserListPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
