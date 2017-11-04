import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { IUser } from './../../models/user';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: IUser;
  userForm: FormGroup;
  editMode: boolean;
  forbiddenUsernames: string[];

  constructor(private _userService: UserService) {}

  ngOnInit() {

    this.forbiddenUsernames = [
      'foo',
      'bar',
      'baz'
    ];

    this.editMode = false;

    this.user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };

    this.userForm = new FormGroup({
      'id': new FormControl(this.user.id, Validators.required, this.duplicateValidator.bind(this)),
      'name': new FormControl(this.user.name, Validators.required),
      'email': new FormControl(this.user.email, [Validators.required, Validators.email], this.duplicateValidator.bind(this)),
      'username': new FormControl(this.user.username, Validators.required, this.duplicateValidator.bind(this)),
      'phone': new FormControl(this.user.phone, Validators.required, this.duplicateValidator.bind(this)),
      'website': new FormControl(this.user.website, Validators.required),
      'address': new FormGroup({
        'street': new FormControl(this.user.address.street, Validators.required),
        'suite': new FormControl(this.user.address.suite, Validators.required),
        'city': new FormControl(this.user.address.city, Validators.required),
        'zipcode': new FormControl(this.user.address.zipcode, Validators.required),
        'geo': new FormGroup({
          'lat': new FormControl(this.user.address.geo.lat, Validators.required),
          'lng': new FormControl(this.user.address.geo.lng, Validators.required),
        })
      }),
      'company': new FormGroup({
        'name': new FormControl(this.user.company.name, Validators.required),
        'bs': new FormControl(this.user.company.bs, Validators.required),
        'catchPhrase': new FormControl(this.user.company.catchPhrase, Validators.required),
      })
    });
  }

  editOrUpdate() {
    if(this.editMode) this.user = this.userForm.value;
    this.editMode = !this.editMode;
  }

  onCancel() {
    this.userForm.setValue(this.user);
    this.editMode = !this.editMode;
  }

  usernameSyncValidator(usernameControl: AbstractControl) {
    return this.forbiddenUsernames.indexOf(usernameControl.value) > -1 ? { username: true }
                                                                       : null;
  }

  duplicateValidator(usernameControl: AbstractControl) {
    return this._userService.isUsernameAvailable(usernameControl.value)
      .map(res => res.length === 0 ? null : { username: true });
  }

}
