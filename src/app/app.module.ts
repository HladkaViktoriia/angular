import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {
  FormsComponent,
  PostComponent,
  PostsComponent,
  UserComponent,
  UsersComponent,
} from "./components";
import { HomeComponent } from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";
import {UserResolveService} from "./services";

const routes: Route[] = [
  // {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '', component: HomeComponent, children: [
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserComponent, resolve: {data: UserResolveService}},
      {path: 'posts', component: PostsComponent, canActivate: [TestGuard]},
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    FormsComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
