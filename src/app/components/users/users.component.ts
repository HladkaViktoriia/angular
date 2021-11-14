import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {UsersService} from "../../services/users.service";

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
