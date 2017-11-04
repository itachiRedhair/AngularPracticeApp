import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../models/user';

@Injectable()
export class UsersService {

  private _api: string = 'http://jsonplaceholder.typicode.com/users';
  constructor(private _http: Http) { }

  public getUsers(): Observable<IUser[]> {
    return this._http.get(this._api)
      .map((response: Response) => response.json() as IUser[]);
  }

}
