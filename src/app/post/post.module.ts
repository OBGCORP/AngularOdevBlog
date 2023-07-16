import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddPostComponent,
    PostDetailComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule,
    RouterModule
  ]
})
export class PostModule { }
