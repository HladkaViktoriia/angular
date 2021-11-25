import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {ObjectTransformationPipe} from "./pipes";
import {HomeComponent} from "./components";
import {UserModule} from "./modules/user/user.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ObjectTransformationPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [
    ObjectTransformationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
