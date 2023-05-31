import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  postArray: Post[] = [
    {
      id: 1,
      body: 'Lorem ipsum dolor sit amet, consectetur adipis occ sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et',
      title: 'Primo post',
      active: true,
      type: 'news',
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipis occ sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et',
      title: 'Secondo post',
      active: true,
      type: 'politics',
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet, consectetur adipis occ sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et',
      title: 'Terzo post',
      active: true,
      type: 'education',
    },
    {
      id: 4,
      body: 'Lorem ipsum dolor sit amet, consectetur adipis occ sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et',
      title: 'Quarto post',
      active: false,
      type: 'news',
    },
    {
      id: 5,
      body: 'Lorem ipsum dolor sit amet, consectetur adipis occ sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et sapien et',
      title: 'Quinto post',
      active: false,
      type: 'politics',
    },
  ];

  getPost(): Post[] {
    return this.postArray;
  }
}
