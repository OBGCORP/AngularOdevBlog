import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentListComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CommentModule { }
