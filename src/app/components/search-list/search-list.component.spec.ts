import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListComponent } from './search-list.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FilterTermPipe } from '../../pipes/filter-term/filter-term.pipe';

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchListComponent, FilterTermPipe],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the search term and set hasBeenSelected to false', () => {
    const newValue = 'test';
    component.updateSearchTerm(newValue);
    expect(component.searchTerm).toBe(newValue);
    expect(component.hasBeenSelected).toBeFalsy();
  });

  it('should select the search term and set hasBeenSelected to true', () => {
    const newValue = 'test';
    component.selectSearchTerm(newValue);
    expect(component.searchTerm).toBe(newValue);
    expect(component.hasBeenSelected).toBeTruthy();
  });

  it('should display filtered items in the template', () => {
    component.items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    component.updateSearchTerm('a');
    fixture.detectChanges();

    const listItems = debugElement.queryAll(By.css('li'));
    expect(listItems.length).toBe(3); // Apple, Banana, Date
    expect(listItems[0].nativeElement.textContent).toContain('Apple');
    expect(listItems[1].nativeElement.textContent).toContain('Banana');
    expect(listItems[2].nativeElement.textContent).toContain('Date');
  });

  it('should handle empty items array', () => {
    component.items = [];
    component.updateSearchTerm('a');
    fixture.detectChanges();

    const listItems = debugElement.queryAll(By.css('li'));
    expect(listItems.length).toBe(0);
  });
});
