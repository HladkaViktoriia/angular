import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get <IPost[]>(urls.posts);
  }

  getPost(id: number): Observable<IPost> {
    return this.httpClient.get <IPost>(urls.posts + '/' + id);
  }

  getUserPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get <IPost[]>(urls.userPosts(id));
  }
}
