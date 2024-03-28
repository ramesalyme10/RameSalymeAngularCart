import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/Port';

@Pipe({
  name: 'productsPipe',
  standalone: true
})
export class ProductsPipePipe implements PipeTransform {

  transform(value: Product[], filterSearch:string): Product[] {
    return value.filter((item:Product) => item.title.toLowerCase().includes(filterSearch.toLowerCase()))
  }

}
