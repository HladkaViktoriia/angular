import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserButtonService {
  private idUser = new BehaviorSubject<number>(0);

  constructor() { }

  getIdUser():BehaviorSubject<number> {
    return this.idUser;
  }

  setIdUser(value: number): void {
    this.idUser.next(value);
  }
}
