import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsService} from "../../services";
import {IPost} from "../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService) {
    this.activatedRoute.data.subscribe(value => this.post = value['data'])

    // сохраняю для себя
    // this.activatedRoute.params.subscribe(params => {
    //   const {id} = params;
    //
    //   postsService.getPost(id).subscribe(value => this.post = value);
    // })
  }

}
