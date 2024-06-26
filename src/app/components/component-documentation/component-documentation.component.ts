import { Component } from '@angular/core';

enum LoaderType {
  Circular = 'Circular',
  Loading = 'Loading',
}

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
})
export class ComponentDocumentationComponent {
  accordionData = [
    { title: 'Panel 1', content: 'Content for panel 1', isExpanded: false },
    { title: 'Panel 2', content: 'Content for panel 2', isExpanded: false },
    { title: 'Panel 3', content: 'Content for panel 3', isExpanded: false },
  ];
  loaderType = LoaderType.Loading;

  toggleValue = false;

  debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
}
