import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { ReverseNamePipe } from './reverse-name/reverse-name.pipe';
@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, ReverseNamePipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
