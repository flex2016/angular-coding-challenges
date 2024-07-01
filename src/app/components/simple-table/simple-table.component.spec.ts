import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleTableComponent } from './simple-table.component';

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with provided tableData', () => {
    component.tableData = [
      { first: 'John 1', last: 'Doe', dob: '01/15/2000' },
      { first: 'John 2', last: 'Doe', dob: '01/15/2000' },
      { first: 'John 3', last: 'Doe', dob: '01/15/2000' },
      { first: 'John 4', last: 'Doe', dob: '01/15/2000' },
    ];
    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(4); // Check that all rows are rendered
  });

  it('should emit headerSelected event when header cell is clicked', () => {
    const emitSpy = jest.spyOn(component.headerSelected, 'emit');
    fixture.detectChanges();

    const headerCell = fixture.nativeElement.querySelector('th');
    headerCell.click();

    expect(emitSpy).toHaveBeenCalledWith({ key: 'dob', value: '01/15/2000' });
  });

  it('should handle null or undefined tableData', () => {
    component.tableData = []; // Set empty array as a valid empty state
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('table')).toBeFalsy();

    component.tableData = []; // Reset to empty array for undefined test
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('table')).toBeFalsy();
  });
});
