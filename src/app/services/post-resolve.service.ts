import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost> {
  constructor(private postService: PostsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    return this.postService.getPost(+route.params['id']);
  }
}
