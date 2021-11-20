import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser;
  isIdParams: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService) {
    this.activatedRoute.data.subscribe(value => this.user = value['data'])

    this.activatedRoute.params.subscribe(params => {
      const {id} = params;

      if (id) {
        userService.getUser(id).subscribe(value => this.user = value);
        this.isIdParams = true;
      }
    })
  }
}
