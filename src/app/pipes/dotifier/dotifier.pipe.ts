import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotifier',
})
export class DotifierPipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    format: string = 'dotify'
  ): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (format === 'same') {
      return value;
    }

    return value.split('').join('.') + '.';
  }
}
