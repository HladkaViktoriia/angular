import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urls} from "../constants";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() :Observable <IUser[]> {
    return this.httpClient.get <IUser[]> (urls.users);
  }
}
