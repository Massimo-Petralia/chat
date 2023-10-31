import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatLoginComponent } from './features/chat/chat-login/chat-login.component';
import { ChatPageComponent } from './features/chat/chat-page/chat-page.component';
import { ChatUserListComponent } from './features/chat/chat-user-list/chat-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatLoginComponent,
    ChatPageComponent,
    ChatUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ChatLoginComponent},
      {path: 'user-list', component: ChatUserListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
