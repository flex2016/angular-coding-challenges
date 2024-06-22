import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent implements OnChanges {
  @Input() rating: number = 0;
  stars: Array<string> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      this.updateStars();
    }
  }

  updateStars(): void {
    this.stars = [];
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      this.stars.push('full');
    }
    if (halfStar) {
      this.stars.push('half');
    }
    for (let i = 0; i < emptyStars; i++) {
      this.stars.push('empty');
    }
  }

  //  get fullStars(): number[] {
  //   const totalFullStars = Math.floor(this.rating);

  //   return Array(totalFullStars).fill(0);
  // }

  //  get hasHalfStar(): boolean {
  //   const highestRating = 5;
  //   const hasHalfStar =
  //     this.rating - Math.floor(this.rating) >= 0.5 &&
  //     this.rating !== highestRating;

  //   return hasHalfStar;
  // }

  //    get emptyStars(): number[] {
  //   const highestRating = 5;
  //   const totalEmptyStars = Math.floor(highestRating - this.rating);

  //   return Array(totalEmptyStars).fill(0);
  // }
}
