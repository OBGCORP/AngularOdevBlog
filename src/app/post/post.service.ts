import { Injectable } from '@angular/core';
import { Post } from './post';
import { mock_posts } from 'src/assets/mock_posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  setPosts() {
    this.posts = mock_posts;
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.postId !== id);
  }

  findPostById(id: Number): Post | undefined {
    return this.posts.find((post) => post.postId === Number(id));
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
