import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-coding-challenges';
  accordionData = [
    { title: 'Panel 1', content: 'Content for panel 1', isExpanded: false },
    { title: 'Panel 2', content: 'Content for panel 2', isExpanded: false },
    { title: 'Panel 3', content: 'Content for panel 3', isExpanded: false },
  ];
}
