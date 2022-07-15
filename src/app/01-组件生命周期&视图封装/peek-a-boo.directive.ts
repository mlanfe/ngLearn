import { Directive, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({ selector: '[appPeekABoo]' })
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) {}

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt('OnInit');
    console.log('指令 ngOnInit');
    // console.log('指令中-ngOnInit', this.logger.personNameInService);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
  // ngDoCheck() {
  //   console.log('指令中-ngDoCheck', this.logger.personNameInService);
  // }
}
