import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { TitleService } from './title.service'; // Adjust the path to your service

describe('TitleService', () => {
  let titleService: TitleService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TitleService,
        { provide: Title, useValue: { setTitle: jest.fn() } },
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(1, 'url', 'urlAfterRedirects')),
          },
        },
        { provide: ActivatedRoute, useValue: {} },
      ],
    });

    titleService = TestBed.inject(TitleService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(titleService).toBeTruthy();
  });
});
