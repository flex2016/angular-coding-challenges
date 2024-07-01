import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';
import { SERVICES_ROUTES } from './services.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

    RouterModule.forChild(SERVICES_ROUTES),
  ],
})
export class ServicesModule {}
