import { Component, OnInit } from '@angular/core';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    /* this._userService.getUsers()
        .then((users: IUser[]) => {
          this.users = users;
          console.log('Users from UserList: ', this.users);
        }); */
    this.users = this._userService.getUsers();
    this._userService.onUserDeleted.subscribe((users: IUser[]) => {
      this.users = users;
      console.log('');
    });
  }

  onDelete($event: number) {
    this._userService.deleteUser($event);
  }

}
