import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../models";
import {UserButtonService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  id: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userButton: UserButtonService) { }

  ngOnInit(): void { }

  navTo(id: number) {
    this.userButton.setIdUser(this.user.id);
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

  getIdUser() {
    this.userButton.getIdUser().subscribe(value => this.id = value);

    return this.id !== this.user.id;
  }
}
