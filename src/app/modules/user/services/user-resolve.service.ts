import { Injectable } from '@angular/core';
import {UsersService} from "./users.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../../../interface";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService {
  constructor(private userService: UsersService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    return this.userService.getUser(+route.params['id']);
  }
}
