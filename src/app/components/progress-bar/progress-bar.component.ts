import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() value: number = 50;
  @Input() max: number = 100;

  increaseValue() {
    if (this.value < 100) {
      this.value += 5;
    }
  }

  decreaseValue() {
    if (this.value > 0) {
      this.value -= 5;
    }
  }
}
