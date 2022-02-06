import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class Summary implements PipeTransform {
  transform(value: any, limit: number) {
    if (!value) return null;

    let actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
