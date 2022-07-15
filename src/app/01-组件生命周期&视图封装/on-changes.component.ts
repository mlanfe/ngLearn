import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'on-changes',
  template: `
    <div class="info">
      <p>{{ hero.name }} can {{ power }}</p>

      <h3>Change Log</h3>
      <button (click)="changeInput()">改变@input传入的属性</button>
      <div *ngFor="let chg of changeLog" class="log">{{ chg }}</div>
    </div>
  `,
})
export class OnChangesComponent implements OnChanges {
  @Input() hero!: Hero;
  @Input() power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('子组件ngOnChanges=======', changes);
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }
  changeInput() {
    // 单向数据流, 只能修改子组件的power, 不能修改父组件的power
    // 如果你需要做一个与预期数据流反方向的修改，就必须触发一个新的变更检测周期，以允许渲染这种变更。
    this.power = '123';
  }

  reset() {
    this.changeLog = [];
  }
}
