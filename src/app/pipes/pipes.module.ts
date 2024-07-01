import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { ReverseNamePipe } from './reverse-name/reverse-name.pipe';
import { DotifierPipe } from './dotifier/dotifier.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    ReverseNamePipe,
    DotifierPipe,
    CreditCardFormatterPipe,
    FlattenPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
