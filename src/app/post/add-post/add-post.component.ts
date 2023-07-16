import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  users: User[] = []; 

  post: Post = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: "",
    content: "",
    viewCount: 0,
    creationDate: "",
    isPublished: false
  };

  constructor(private postService: PostService, private router: Router, private userService: UserService) {
    this.userService.setUsers();
    this.users = this.userService.getUsers();
  }

  handleSaveClick() {
    this.postService.addPost(this.post);
    this.router.navigateByUrl("/post-list");
  }

  handleCancelClick() {
    this.router.navigateByUrl("/post-list");
  }
}
