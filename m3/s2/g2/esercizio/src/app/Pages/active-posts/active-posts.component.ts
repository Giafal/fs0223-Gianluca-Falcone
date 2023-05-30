import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts: Post[] = [];

  constructor(private postSvc: PostService) {
    postSvc
      .getAllPost()
      .then(
        (posts) => (this.posts = posts.filter((post) => post.active === true))
      );
  }
}
