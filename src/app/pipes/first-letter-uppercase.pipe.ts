import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCase'
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(name: string): string {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

}
