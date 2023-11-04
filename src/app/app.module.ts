import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatAccesComponent } from './features/chat/chat-acces/chat-acces.component';
import { ChatAccesPageComponent } from './features/chat/chat-acces-page/chat-acces-page.component';
import { ChatUserListComponent } from './features/chat/chat-user-list/chat-user-list.component';
import { ChatUserListPageComponent } from './features/chat/chat-user-list-page/chat-user-list-page.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule } from './ng-zorro-antd';

registerLocaleData(it);

@NgModule({
  declarations: [
    AppComponent,
    ChatAccesComponent,
    ChatAccesPageComponent,
    ChatUserListComponent,
    ChatUserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ChatAccesPageComponent},
      {path: 'user-list-page/:logged-in-user', component: ChatUserListPageComponent}
    ]),
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: it_IT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
