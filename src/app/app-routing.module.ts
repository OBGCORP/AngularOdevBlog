import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'post-list/:id', component: PostDetailComponent},
  {path: 'comment-list', component: CommentListComponent},
  {path: 'add-comment', component: AddCommentComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'add-category', component: AddCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
