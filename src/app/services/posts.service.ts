import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get <IPost[]>(this.url);
  }

  getPost(id: number): Observable<IPost> {
    return this.httpClient.get <IPost>(this.url + '/' + id);
  }
}
