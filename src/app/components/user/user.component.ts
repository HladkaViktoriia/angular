import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
    })
  }

  ngOnInit(): void {
  }
}
