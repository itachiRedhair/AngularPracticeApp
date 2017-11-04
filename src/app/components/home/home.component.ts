import { Component, OnInit } from '@angular/core';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: IUser[];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    /* this._userService.onUserDeleted.subscribe((users: IUser[]) => {
      this.users = users;
    }); */
  }

  onClick() {
    console.log('Button was clicked');
  }

  onUserDeleted(userId: number) {
    this._userService.deleteUser(userId);
  }

}
