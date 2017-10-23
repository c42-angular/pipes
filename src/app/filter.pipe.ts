import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arrayItems: any, filterString: string, propName: string): any {
    if (arrayItems.length === 0 || filterString.length === 0) {
      return arrayItems;
    }

    const filteredArray = [];

    for (const item of arrayItems) {
      if (item[propName] === filterString) {
        filteredArray.push(item);
      }
    }

    return filteredArray;
  }
}
