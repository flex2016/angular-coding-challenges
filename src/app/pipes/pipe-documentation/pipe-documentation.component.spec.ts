import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocumentationComponent } from './pipe-documentation.component';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { ReverseNamePipe } from '../reverse-name/reverse-name.pipe';
import { DotifierPipe } from '../dotifier/dotifier.pipe';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';

describe('PipeDocumentationComponent', () => {
  let component: PipeDocumentationComponent;
  let fixture: ComponentFixture<PipeDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PipeDocumentationComponent,
        TruncatePipe,
        ReverseNamePipe,
        DotifierPipe,
        CreditCardFormatterPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
