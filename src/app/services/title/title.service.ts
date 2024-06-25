import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public initializeTitleService() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        const child = this.getChild(this.activatedRoute);
        if (child.snapshot.data?.['title']) {
          const pageTitle = child.snapshot.data['title'];
          const newTitle = `100 Angular Challenge - ${pageTitle}`;
          this.titleService.setTitle(newTitle);
        } else {
          this.titleService.setTitle('100 Angular Challenge');
        }
      });
  }

  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
