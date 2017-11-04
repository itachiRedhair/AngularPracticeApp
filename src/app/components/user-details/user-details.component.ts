import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  selectedUser: IUser;

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    console.log(this._route);
    this._route.params.subscribe((params) => {
      this.userId = +params.userId;
      /* this._userService.getUserById(this.userId)
        .subscribe((user: IUser) => this.selectedUser = user); */
      this.selectedUser = this._userService.getUserById(this.userId);
    });
  }

}
