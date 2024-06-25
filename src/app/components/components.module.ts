import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';

import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { COMPONENTS_ROUTES } from './components.routes';
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
  ],
})
export class ComponentsModule {}
