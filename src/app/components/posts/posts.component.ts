import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  id: number;
  posts: IPost[] = [];

  constructor(private postService :PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.id).subscribe(value => this.posts = value);
  }
}
