import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) { }

  getPosts(id :number) :Observable <IPost[]> {
    return this.httpClient.get <IPost[]> (this.url + id);
  }
}
