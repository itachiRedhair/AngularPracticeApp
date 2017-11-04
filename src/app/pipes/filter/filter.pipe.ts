import { Pipe, PipeTransform } from '@angular/core';

import { IServer } from './../../models/server.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: IServer[], filterBy: string, filterString: string): IServer[] {
    if(filterString === '') return input;
    return input.filter(
      server => 
        server[filterBy].toString() === filterString.toUpperCase()
    ) || [];
  }

}
