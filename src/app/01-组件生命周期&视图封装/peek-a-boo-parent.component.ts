import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'peek-a-boo-parent',
  template: `
    <hr />
    <div class="parent">
      <h2>Peek-A-Boo</h2>

      <button type="button" (click)="toggleChild()">
        {{ hasChild ? 'Destroy' : 'Create' }} PeekABooComponent
      </button>
      <button type="button" (click)="updateHero()" [hidden]="!hasChild">
        Update Hero
      </button>

      <div class="info">
        <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>

        <h3>Lifecycle Hook Log</h3>
        <div *ngFor="let msg of hookLog" class="log">{{ msg }}</div>
      </div>
    </div>
  `,
  providers: [LoggerService],
})
// export class PeekABooParentComponent implements OnChanges, OnInit, DoCheck {
export class PeekABooParentComponent {
  hasChild = false;
  heroName = 'Windstorm';
  hookLog: string[] = [];

  constructor(private logger: LoggerService) {
    this.hookLog = logger.logs;

  }

  toggleChild() {
    this.hasChild = !this.hasChild;

    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }
  // ngDoCheck() {
  //   console.log('父组件 ngDoCheck');
  // }
  // ngOnInit() {
  //   console.log('父组件 ngOnInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('父组件 ngAfterContentChecked');
  // }
  // ngAfterViewChecked() {
  //   console.log('父组件 ngAfterViewChecked');
  // }
  // ngOnChanges() {
  //   console.log('父组件 ngOnChanges');
  // }
  updateHero() {
    // 以下况触发的生命周期数量不同

    // 1. 修改向子组件传递的属性
    this.heroName += '!';

    // 2. 执行代码,但是不修改任何值; 或者修改没有传递给子组件的值
    // console.log(this.hasChild);

    // 这段代码也是相当于执行代码, 不修改任何值
    // 但是这段代码里的函数将在下一个事件循环中执行, 也导致再次触发了ngDocheck,
    // ngAfterContentChecked,ngAfterViewChecked, 是否说明一次事件循环里面,
    // 同一个生命周期函数只会执行一次?
    // this.logger.tick();

    // this.logger.personNameInService = 'Tom'

    
    // setTimeout(() => {
    //   setTimeout(() => {
    //     console.log('============宏任务');
    //   })
    //   Promise.resolve().then(() => {
    //     console.log('============微任务');

    //   })
    //   console.log('============同步任务');
    //   this.heroName = '123'
    // })
  }
}
