import { Component, OnInit, Input, ViewContainerRef, ContentChild, ViewChild, OnDestroy } from '@angular/core';
import { AdItem } from './ad-item'
import { AdDirective } from './ad.directive'

@Component({
  selector: 'app-ad-banner-tst',
  template: `
  <div class="ad-banner-example">
    <div>Advertisements</div>
    <ng-template adHost></ng-template>
  </div>
  `,
})
export class AdBannerTstComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = []

  index = -1

  @ViewChild(AdDirective,{static: true}) adHost!: AdDirective
  timer?: number

  // constructor(viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.loadComponent()
    this.getStart()
  }
  loadComponent() {
    this.index++
    const adItem = this.ads[this.index%this.ads.length]
    const viewContainerRef = this.adHost.viewContainerRef
    viewContainerRef.clear()
    const componentRef = viewContainerRef.createComponent(adItem.component)
    componentRef.instance.data = adItem.data

  }
  getStart() {
    this.timer = Number(setInterval(() => {
      this.loadComponent()
    }, 3000))
  }
  ngOnDestroy(): void {
    window.clearInterval(this.timer)
  }

}
