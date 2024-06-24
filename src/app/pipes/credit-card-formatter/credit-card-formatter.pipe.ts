import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    // Handle null or undefined values
    if (value === null || value === undefined) {
      return 'Error: No credit card number provided';
    }

    // Check for invalid characters (only digits are allowed)
    if (!/^\d+$/.test(value)) {
      return 'Error: Invalid characters';
    }

    // Check for valid length (typically 16 digits for most credit cards)
    if (value.length !== 16) {
      return 'Error: Invalid length';
    }

    // Format the credit card number with dashes
    return value.replace(/(\d{4})(?=\d)/g, '$1-');
  }
}

// Alternative solution:
// export class CreditCardFormatterPipe implements PipeTransform {
//   public transform(cardNumber: string): string {
//     if (!this.hasCorrectLength(cardNumber)) {
//       return 'Invalid Card Length.';
//     }

//     if (!this.isAllNumbers(cardNumber)) {
//       return 'Invalid Characters.';
//     }

//     return this.formatCardNumber(cardNumber);
//   }

//   private isAllNumbers(cardNumber: string): boolean {
//     const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     const totalValidCharacters = cardNumber
//       .split('')
//       .filter((char) => stringNumbers.includes(char)).length;

//     return totalValidCharacters === cardNumber.length;
//   }

//   private hasCorrectLength(cardNumber: string): boolean {
//     const cardNumberLength = cardNumber.length;
//     const isMasterDiscoverVisaCardLength = 16;
//     const isAmericanExpressCardLength = 15;

//     if (
//       cardNumberLength === isAmericanExpressCardLength ||
//       cardNumberLength === isMasterDiscoverVisaCardLength
//     ) {
//       return true;
//     }

//     return false;
//   }

//   private formatCardNumber(cardNumber: string): string {
//     const parts = cardNumber.match(/[\s\S]{1,4}/g);

//     return parts.join('-');
//   }
// }
