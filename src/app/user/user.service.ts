import { Injectable } from '@angular/core';
import { User } from './user';
import { mock_users } from 'src/assets/mock_users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = []
  constructor() {
    this.setUsers();
   }

  getUsers(): User[] {
    return this.users;
  }

  setUsers():  void {
    this.users = mock_users;
  }

  deleteUser(id: Number) {
    this.users = this.users.filter((user) => user.userId !== id);
  }
  
  findUserById(id: Number): User | undefined {
    return this.users.find((user) => user.userId === id);
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  userCount(): number {
    return this.users.length;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  editUser(userToEdit: User, id: number) {
    this.users = this.users.map((user) => {
      if(user.userId === id) {
        user = userToEdit;
      }
      return user;
    });
  }

  isUnique(username: string, email: string, id: number): boolean {
    if(this.users.find((user) => user.username === username.toLowerCase() && user.userId !== id)) {
      alert('Username already exists.')
      return false;
    } else if(this.users.find((user) => user.email === email.toLowerCase() && user.userId !== id)) {
      alert('e-Mail already exists.')
      return false;
    } else {
      return true;
    }
  }

  isLastUser(): boolean {
    return this.users.length === 1 ? true : false;
  }

}
