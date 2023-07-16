import { Component } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  comments: Comment[] = [];
  comment: Comment = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    creationDate: "",
    isConfirmed: false
  }

  constructor(private commentService: CommentService, private router: Router) {
    this.commentService.setComments();
  }

  handleAddComment() {
    this.comment.commentId = this.commentService.getComments()[this.commentService.getComments().length - 1].commentId + 1;
    this.commentService.addComment(this.comment);
    this.router.navigateByUrl("/comment-list");
  }

  handleCancelAdd() {
    this.router.navigateByUrl("/comment-list");
  }
}
