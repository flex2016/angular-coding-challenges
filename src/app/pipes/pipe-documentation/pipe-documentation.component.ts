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
}
