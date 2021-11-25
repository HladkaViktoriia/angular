import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UsersService} from "./services/users.service";
import { UserComponent } from './components/users/user/user.component';
import { UserDetailsComponent } from './components/users/user/user-details/user-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UsersService,
  ]
})
export class UserModule { }
