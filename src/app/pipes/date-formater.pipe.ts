import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormater'
})
export class DateFormaterPipe implements PipeTransform {

  transform(date: Date): string {
    const time = new Date(date).toLocaleTimeString()
    const hours = new Date(date).getHours()
    const minutes = new Date(date).getMinutes()    
    const formatedDate = new Date(date).toLocaleDateString("fr",{
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    
    return `Le ${formatedDate} à ${hours}H${minutes}`
  }

}
