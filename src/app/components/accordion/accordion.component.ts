import { Component, Input } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
