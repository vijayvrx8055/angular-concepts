import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  // providers: [UserService], // used in case of dependency injection
})
export class UserDetailsComponent {

  // private userService: UserService | undefined;

  users: User[] | undefined;
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }

  getUsers() {
    this.users = this.userService?.getUsers();
  }
}
