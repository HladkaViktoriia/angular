import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../../../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
    })

    if (this.user === undefined) {
      this.activatedRoute.data.subscribe(value => this.user = value['data'])
    }
  }

  ngOnInit(): void {
  }
}
