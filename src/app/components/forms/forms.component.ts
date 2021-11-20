import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {UsersService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user = {
    username: 'Max',
    password: 111,
  }
  myForm: FormGroup;
  myForm2: FormGroup;
  users: IUser[];
  userDetails: IUser;

  constructor(private userService: UsersService,
              private router: Router) {}

  customValidator(control: AbstractControl): null | object {
    return control.value.includes('huck') ? {ahtung: 'Error'} : null;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(7), this.customValidator]),
      age: new FormControl(10),
    });

    this.myForm2 = new FormGroup({
      userId: new FormControl(1),
    });

    this.userService.getUsers().subscribe(value => this.users = value);
  }

  save(tref: HTMLFormElement) {
    console.log(tref['username'].value)
  }

  save2() {
    console.log(this.myForm.getRawValue())
  }

  showDetails() {
    const id = this.myForm2.controls['userId'].value;
    this.userDetails = this.users[id-1];

    this.router.navigate(['users', id], {state: this.userDetails})
  }
}
