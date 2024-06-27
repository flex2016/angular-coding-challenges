import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent {
  @Input() quote = '';
  @Input() author = '';
  @Input() occupation = '';
}
