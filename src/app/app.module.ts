import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from "./components";
import {ObjectTransformationPipe} from "./pipes";
import {PostResolveService} from "./services";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    ObjectTransformationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {path: ':id', component: UserDetailsComponent}
        ]},
      {path: 'posts', component: PostsComponent,
        children: [
          {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolveService}}
        ]},
    ]),
  ],
  providers: [
    ObjectTransformationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
