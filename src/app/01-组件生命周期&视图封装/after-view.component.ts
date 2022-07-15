import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';

import { ChildViewComponent } from './child-view.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'after-view',
  template: `
    <div>child view begins</div>
    <app-child-view></app-child-view>
    <div>child view ends</div>
    <p *ngIf="comment" class="comment">
      {{ comment }}
    </p>
  `,
})
export class AfterViewComponent
  implements
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit
{
  comment = '';
  tst = '123';
  private prevHero = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }
  ngAfterContentInit() {
    // console.log('AfterContentInit======1', this.viewChild?.hero);
  }
  ngAfterContentChecked() {
    // console.log('AfterContentInit======1', this.viewChild?.hero);
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit======1', this.viewChild?.hero);
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
    // console.log('ngAfterViewInit======', this.viewChild?.hero);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked======1', this.viewChild?.hero);
    // console.log('ngAfterViewChecked======', this.viewChild?.hero);
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';

    // 方式一: 必须异步修改 this.comment
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => (this.comment = c));
    }
    this.tst = '23333'

    // 方式二: 直接同步修改 this.comment, 报错
    // if (c !== this.comment) {
    //   this.comment = c
    // }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
  // ...
}
