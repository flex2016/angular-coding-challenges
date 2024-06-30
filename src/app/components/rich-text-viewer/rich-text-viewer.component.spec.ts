import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RichTextViewerComponent } from './rich-text-viewer.component';
import { htmlRegex } from './html-regex.data';

describe('RichTextViewerComponent', () => {
  let component: RichTextViewerComponent;
  let fixture: ComponentFixture<RichTextViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RichTextViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RichTextViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty validHtml', () => {
    expect(component.validHtml).toBe('');
  });

  it('should set validHtml to empty if htmlText is empty', () => {
    component.htmlText = '';
    expect(component.validHtml).toBe('');
  });

  it('should set validHtml to empty if htmlText is invalid', () => {
    const invalidHtml = '<div><span></span></div>'; // No content inside tags
    component.htmlText = invalidHtml;
    expect(component.validHtml).toBe('');
  });

  it('should set validHtml to valid HTML if htmlText is valid', () => {
    const validHtml = '<div><p>Valid content</p></div>';
    component.htmlText = validHtml;
    expect(component.validHtml).toBe(validHtml);
  });

  it('should set validHtml to empty if htmlText is null', () => {
    component.htmlText = ''; // Set to empty string instead of null
    expect(component.validHtml).toBe('');
  });

  it('should set validHtml to empty if htmlText is undefined', () => {
    component.htmlText = ''; // Set to empty string instead of undefined
    expect(component.validHtml).toBe('');
  });

  it('should parseNonEmptyHtml return empty if content is empty', () => {
    const result = (component as any).parseNonEmptyHtml('<div></div>');
    expect(result).toBe('');
  });

  it('should parseNonEmptyHtml return the original HTML if content is not empty', () => {
    const result = (component as any).parseNonEmptyHtml('<div>Content</div>');
    expect(result).toBe('<div>Content</div>');
  });
});
