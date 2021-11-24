import { Component, OnInit } from '@angular/core';

import {IUser} from "../../models";
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :IUser[] = [];

  constructor(private userService :UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
}
