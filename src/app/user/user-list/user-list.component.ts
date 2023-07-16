import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[] = [];
  username: string = "";
  email: string = "";
  creationDate: string = "";
  isActive: boolean = false;
  editMode: boolean = false;
  userId: number = 0;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  //Output kullanimi
  handleEditClick($event: number) {
    this.editMode = !this.editMode;
    this.userId = $event;
  }

  //Output kullanimi
  handleDeleteClick($event: number) {
    if(this.userService.isLastUser()) {
      alert('Can not delete the only user remaining.');
    } else {
      this.userService.deleteUser($event);
      this.users = this.userService.getUsers();
    }
  }

  handleSaveClick() {
    if(this.username == '' || this.email == '' || this.creationDate == '') {
      alert('Fill in all the fields to proceed');
    } else if(this.userService.isUnique(this.username, this.email, this.userId)) {
      const user: User = {
        userId: this.userId,
        username: this.username,
        email: this.email,
        creationDate: this.creationDate,
        isActive: this.isActive
      }
      this.userService.editUser(user, this.userId);
      this.users = this.userService.getUsers();
      this.editMode = false;
      this.editMode = false;
      this.username = "";
      this.email = "";
      this.creationDate = "";
      this.userId = 0;
    }
  }

  //Tum verileri resetleme
  handleCancelClick() {
    this.editMode = false;
    this.username = "";
    this.email = "";
    this.creationDate = "";
    this.userId = 0;
  }
}
