import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { OTHER_ROUTES } from './other.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(OTHER_ROUTES),
  ],
})
export class OtherModule {}
