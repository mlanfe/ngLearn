import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  AfterContentChecked,
} from '@angular/core';

import { LoggerService } from './logger.service';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({ selector: '[appSpy]' })
export class SpyDirective
  // implements OnInit, OnDestroy, OnChanges, AfterContentChecked
  implements OnInit, OnDestroy
{
  private id = nextId++;
  @Input() tst?: string;

  constructor(private logger: LoggerService) {}

  // ngOnChanges() {
  //   // this.logger.log(`Spy #${this.id} onInit`);
  //   console.log('指令中ngOnChanges', this.tst);
  // }
  ngOnInit() {
    
    this.logger.log(`Spy #${this.id} onInit`);
    // console.log(this.tst);
  }
  // ngAfterContentChecked() {
  //   console.log('指令中AfterContentChecked');
  // }
  ngOnDestroy() {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }
}
