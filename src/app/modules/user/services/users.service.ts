import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../../interface";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getUsers() :Observable <IUser[]> {
    return this.httpClient.get <IUser[]> (urls.users);
  }

  getUser(id: number) :Observable <IUser> {
    return this.httpClient.get <IUser> (urls.user(id));
  }
}
