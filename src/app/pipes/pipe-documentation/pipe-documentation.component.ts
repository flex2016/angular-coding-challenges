import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss',
})
export class PipeDocumentationComponent {
  exampleText: string =
    'This is a long text that needs to be truncated because it exceeds the default maximum length of 100 characters.';
  nullText: string | null = null;
  undefinedText: string | undefined = undefined;

  fee: number = 0.031234;
  amount: number = 123.45;
  currency: string = 'EUR';
  timeOftransaction: Date = this.getPresentDate();

  public getPresentDate() {
    return new Date(1997, 6, 1, 12, 32);
  }
}
