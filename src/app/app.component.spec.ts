import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TitleService } from './services/title/title.service';

describe('AppComponent', () => {
  let titleServiceMock: { initializeTitleService: jest.Mock };
  beforeEach(async () => {
    titleServiceMock = {
      initializeTitleService: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: TitleService, useValue: titleServiceMock }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should call initializeTitleService on ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // triggers ngOnInit
    expect(titleServiceMock.initializeTitleService).toHaveBeenCalled();
  });
});
