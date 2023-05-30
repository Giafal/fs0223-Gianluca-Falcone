import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  posts: Post[] = [];

  constructor(private postSvc: PostService) {
    postSvc
      .getAllPost()
      .then(
        (posts) => (this.posts = posts.filter((post) => post.active === false))
      );
  }
}
