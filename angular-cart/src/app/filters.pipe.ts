import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '../Models/Sort';

@Pipe({
  name: 'filters',
  standalone: true
})
export class FiltersPipe implements PipeTransform {

  transform(value: Sort[], filtersearch:string): Sort[] {
    return value.filter((item:Sort) => item.title.toLowerCase().includes(filtersearch.toLowerCase()))
  }

}
