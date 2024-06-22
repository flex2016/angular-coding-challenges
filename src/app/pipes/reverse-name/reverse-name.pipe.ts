import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseName',
})
export class ReverseNamePipe implements PipeTransform {
  transform(
    person: { firstName: string; lastName: string } | string | null | undefined,
    reverse: boolean = false
  ): string {
    if (
      !person ||
      typeof person !== 'object' ||
      !('firstName' in person) ||
      !('lastName' in person)
    ) {
      return '';
    }

    const firstName = person.firstName || '';
    const lastName = person.lastName || '';

    return reverse ? `${lastName} ${firstName}` : `${firstName} ${lastName}`;
  }
}
