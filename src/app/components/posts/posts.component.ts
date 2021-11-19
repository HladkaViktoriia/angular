import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {PostsService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {
  @Input()
  idUser: any;
  posts: IPost[] = [];

  constructor(private postService :PostsService) {
  }

  ngOnChanges(): void {
    this.postService.getUserPosts(+this.idUser).subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }
}
