import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

// export class AdItem {
//   constructor(public component: Type<any>, public data: any) {}
// }

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- <app-ad-banner [ads]="ads"></app-ad-banner> -->
      <app-ad-banner-tst [ads]="ads"></app-ad-banner-tst>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

