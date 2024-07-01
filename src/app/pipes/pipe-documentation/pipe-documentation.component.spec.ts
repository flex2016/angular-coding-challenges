import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocumentationComponent } from './pipe-documentation.component';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { ReverseNamePipe } from '../reverse-name/reverse-name.pipe';
import { DotifierPipe } from '../dotifier/dotifier.pipe';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from '../flatten/flatten.pipe';
import { FilterTermPipe } from '../filter-term/filter-term.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

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
        FlattenPipe,
        FilterTermPipe,
        CardComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize flattenData correctly', () => {
    expect(component.flattenData).toEqual([1, 2, [3], [4, [5, 6, [7]]]]);
  });

  it('should modify flattenData correctly when modifyFlatten is called', () => {
    component.modifyFlatten();
    expect(component.flattenData).toEqual([1, 2, [3], [4, [5, 6, [7]]], 3, 5]);
  });

  it('should reassign flattenData correctly when reassignFlatten is called', () => {
    const originalArray = component.flattenData;
    component.reassignFlatten();
    expect(component.flattenData).not.toBe(originalArray); // New reference
    expect(component.flattenData).toEqual([1, 2, [3], [4, [5, 6, [7]]]]);
  });
});
