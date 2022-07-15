import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
} from '@angular/core';

import { ChildComponent } from './child.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-content',
  template: `
    <div>===========子组件投影内容 begins=========</div>
    <ng-content></ng-content>
    <div>===========子组件投影内容 ends===========</div>
    <p *ngIf="comment" class="comment">
      {{ comment }}
    </p>
    <br />
    <div>------------------子组件结束----------------------</div>
  `,
})
export class AfterContentComponent
  implements AfterContentChecked, AfterContentInit
{
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // console.log('AfterContentInit======', this.contentChild.hero);
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked======', this.contentChild.hero);
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit======', this.contentChild.hero);
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked======', this.contentChild.hero);
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment =
      this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
  // ...
}
