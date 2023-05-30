import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getAllPost(): Promise<Post[]> {
    return fetch('../assets/db.json').then((res) => res.json());
  }
}
