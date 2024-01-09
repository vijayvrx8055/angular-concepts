import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

  userService: UserService | undefined;
  users: User[] | undefined;
  constructor() {
    this.userService = new UserService();
  }

  getUsers() {
    this.users = this.userService?.getUsers();
  }

}
