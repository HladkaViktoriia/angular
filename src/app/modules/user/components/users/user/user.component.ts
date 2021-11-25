import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../../../interface";
import {UserButtonService} from "../../../services/user-button.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser;
  id: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userButton: UserButtonService) {
  }

  navTo(id: number) {
    this.userButton.setIdUser(this.user.id);
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

  getIdUser() {
    this.userButton.getIdUser().subscribe(value => this.id = value);

    return this.id !== this.user.id;
  }
}
