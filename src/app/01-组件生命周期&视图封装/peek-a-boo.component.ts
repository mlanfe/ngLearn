import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { LoggerService } from './logger.service';
import { PeekABooDirective } from './peek-a-boo.directive';

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my hero, {{name}}</p>',
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name = '';

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    console.log('子组件 constructor');
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    console.log('子组件 ngOnChanges', this.name);

    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  override ngOnInit() {
    console.log('子组件 ngOnInit');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    console.log('子组件 ngDoCheck');
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    console.log('子组件 ngAfterContentInit');
    this.logIt('AfterContentInit');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    console.log('子组件 ngAfterContentChecked');
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('子组件 ngAfterViewInit');
    this.logIt('AfterViewInit');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    console.log('子组件 ngAfterViewChecked');
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('子组件 ngOnDestroy');
    this.logIt('OnDestroy');
  }
}
