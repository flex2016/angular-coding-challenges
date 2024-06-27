import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty title by default', () => {
    expect(component.title).toBe('');
  });

  it('should not change the title if it is not provided', () => {
    component.title = 'Test Title';
    expect(component.title).toBe('Test Title');
  });

  it('should not change the title if it is provided and then reset', () => {
    component.title = 'Test Title';
    expect(component.title).toBe('Test Title');
    component.title = '';
    expect(component.title).toBe('');
  });

  it('should be hidden by default', () => {
    expect(component.isHidden).toBeTruthy();
  });

  it('should open the modal', () => {
    component.open();
    expect(component.isHidden).toBe(false);
  });

  it('should display the modal when open() is called', () => {
    component.open();
    fixture.detectChanges();
    const modalElement = fixture.debugElement.query(By.css('.modal-container'));
    expect(modalElement).toBeTruthy();
  });

  it('should close the modal', () => {
    component.open();
    component.close();
    expect(component.isHidden).toBe(true);
  });

  it('should hide the modal when close() is called', () => {
    component.open();
    fixture.detectChanges();
    component.close();
    fixture.detectChanges();
    const modalElement = fixture.debugElement.query(By.css('.modal-container'));
    expect(modalElement.classes['is-hidden']).toBeTruthy();
  });

  it('should not open the modal if it is already open', () => {
    component.open();
    expect(component.isHidden).toBe(false);
    component.open();
    expect(component.isHidden).toBe(false);
  });

  it('should not close the modal if it is already closed', () => {
    component.close();
    expect(component.isHidden).toBe(true);
    component.close();
    expect(component.isHidden).toBe(true);
  });

  it('should close the modal when the close button is clicked', () => {
    component.open();
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('i.fas.fa-times'));
    closeButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isHidden).toBeTruthy();
  });

  it('should close the modal when the overlay is clicked', () => {
    component.open();
    fixture.detectChanges();
    const overlay = fixture.debugElement.query(By.css('.modal-overlay'));
    overlay.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isHidden).toBeTruthy();
  });
});
