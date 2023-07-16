import { Component } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  comments: Comment[] = []
  editMode: boolean = false;
  comment: Comment = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    creationDate: "",
    isConfirmed: false
  }

  constructor(private commentService: CommentService) {
    this.commentService.setComments();
    this.comments = this.commentService.getComments();
  }

  handleCommentEdit(id: number) {
    this.comment = this.comments.find((comment) => comment.commentId === id)!;
    this.editMode = true;
  }

  handleCommentDelete(id: number) {

  }

  handleSaveEdit() {
    
  }

  handleCancelEdit() {
    this.editMode = false;
  }
}
