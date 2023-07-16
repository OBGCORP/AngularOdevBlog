import { Injectable } from '@angular/core';
import { mock_comments } from 'src/assets/mock_comments';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  constructor() {
    this.setComments();
   }

  getComments(): Comment[] {
    return this.comments;
  }

  setComments() {
    this.comments = mock_comments;
  }

  deleteComment(id: number) {
    this.comments = this.comments.filter((comment) => comment.commentId !== id);
  }

  findCommentById(id: Number): Comment | undefined {
    return this.comments.find((comment) => comment.commentId === Number(id));
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
