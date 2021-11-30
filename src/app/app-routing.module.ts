import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent, LoginComponent} from "./components";

const routes: Route[] = [
  {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'admin', loadChildren:() => import('./components/admin/admin.module').then(value => value.AdminModule)}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
