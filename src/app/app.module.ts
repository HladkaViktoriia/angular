import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {FormsComponent, PostComponent, PostsComponent, UserComponent} from "./components";
import { HomeComponent } from './components/home/home.component';
import {TestGuard} from "./guards/test.guard";

const routes: Route[] = [
  // {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '', component: HomeComponent, children: [
      {path: 'users/:name', component: UserComponent},
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
    UserComponent
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
