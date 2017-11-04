import { Component, OnInit } from '@angular/core';

import { IServer } from './../../models/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus: string = '';
  fields: string[] = [ 'id', 'name', 'size', 'status' ];
  servers: IServer[] = [{
    id: 1,
    name: 'LOCAL',
    size: 'SMALL',
    status: 'ACTIVE'
  }, {
    id: 2,
    name: 'DEV',
    size: 'SMALL',
    status: 'OFFLINE'
  }, {
    id: 3,
    name: 'QAT',
    size: 'MEDIUM',
    status: 'OFFLINE'
  }, {
    id: 4,
    name: 'SVT',
    size: 'MEDIUM',
    status: 'ACTIVE'
  }, {
    id: 5,
    name: 'UAT',
    size: 'LARGE',
    status: 'ACTIVE'
  }, {
    id: 6,
    name: 'PROD',
    size: 'LARGE',
    status: 'ACTIVE'
  }];

  constructor() { }

  ngOnInit() {
  }

}
