import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.totalItems).toEqual(1);
    expect(component.pageSize).toEqual(25);
    expect(component.currentPage).toEqual(1);
    expect(component.step).toEqual(2);
  });

  it('should calculate totalPages correctly', () => {
    component.totalItems = 100;
    component.pageSize = 20;
    fixture.detectChanges();
    expect(component.totalPages).toEqual(5);
  });

  it('should check if it is the first page', () => {
    component.currentPage = 1;
    expect(component.isFirstPage).toBe(true);
  });

  it('should check if previous page is disabled', () => {
    component.currentPage = 1;
    expect(component.isPreviousDisabled).toBe(true);
  });

  it('should set page correctly', () => {
    component.setPage(3);
    expect(component.currentPage).toBe(3);
  });

  it('should emit pageChange event when setPage is called', () => {
    jest.spyOn(component.pageChange, 'emit');
    component.setPage(2);
    expect(component.currentPage).toBe(2);
    expect(component.pageChange.emit).toHaveBeenCalledWith(2);
  });
});
