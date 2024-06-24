import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss',
})
export class PipeDocumentationComponent {
  exampleText: string =
    'This is a long text that needs to be truncated because it exceeds the default maximum length of 100 characters.';
  shortText: string = 'This is a short text';
  nullText: string | null = null;
  undefinedText: string | undefined = undefined;

  fee: number = 0.031234;
  amount: number = 123.45;
  currency: string = 'EUR';
  timeOftransaction: Date = this.getPresentDate();
  validPerson = { firstName: 'John', lastName: 'Doe' };
  invalidPerson: string | null = 'invalid';
  undefinedPerson: { firstName: string; lastName: string } | undefined;

  creditCardNumber = '1111222233334444';
  invalidCreditCardNumber = '11112222abc34444';
  invalidCreditCardLength = '"111111111111111111111111111111"';
  nullCreditCardNumber = null;

  public getPresentDate() {
    return new Date(1997, 6, 1, 12, 32);
  }
}
