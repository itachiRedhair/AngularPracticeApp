import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, place: string, textToAppend: string): string {
    return place === 'pre' ? textToAppend + input : input + textToAppend;
  }

}