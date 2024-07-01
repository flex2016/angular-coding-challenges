import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocumentationComponent } from './component-documentation.component';
import { CardComponent } from '../card/card.component';

describe('ComponentDocumentationComponent', () => {
  let component: ComponentDocumentationComponent;
  let fixture: ComponentFixture<ComponentDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDocumentationComponent, CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
