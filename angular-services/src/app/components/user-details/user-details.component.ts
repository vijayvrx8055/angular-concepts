import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  private userService: UserService | undefined;

  users: User[] | undefined;
  constructor() {
    this.userService = new UserService();
  }

  getUsers() {
    this.users = this.userService?.getUsers();
  }
}
