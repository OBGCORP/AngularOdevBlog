import { Injectable } from '@angular/core';
import { Post } from './post';
import { mock_posts } from 'src/assets/mock_posts';
import { CommentService } from '../comment/comment.service';
import { Comment } from '../comment/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  getPosts(): Post[] {
    return this.posts;
  }

  setPosts() {
    this.posts = mock_posts;
  }

  deletePost(id: number) {
    //if comments has any comment with a postId same as the id of the post in the parameter
    //alert users, rejects deletion request.
    this.comments = this.commentService.getComments();
    if(this.comments.some((comment) => comment.postId === id)) {
      alert("Can not delete a post which has comments.");
      return;
    }
    this.posts = this.posts.filter((post) => post.postId !== id);
  }

  findPostById(id: Number): Post | undefined {
    return this.posts.find((post) => post.postId === Number(id));
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
