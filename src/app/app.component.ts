import { ViewChild, ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatSidenavContainer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Turkey';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('snav') public myNav: MatSidenavContainer;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onResize() {
    this.manageNav();
  }

  ngOnInit() {
    this.manageNav();
  }

  manageNav(): void {
    this.mobileQuery.matches ? this.myNav.close() : this.myNav.open();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
