import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

import { IUser } from './../../models/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit, OnChanges {

  @Input() userAsInput: IUser;

  @Output() whenBinIconInsideChildWasClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  whenIconInsideChildWasClicked(userId: number) {
    this.whenBinIconInsideChildWasClicked.emit(userId);
  }

}