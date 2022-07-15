import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{ major }}.{{ minor }}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{ change }}</li>
    </ul>
  `,
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 1;
  @Input() minor = 23;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // ngOnChanges函数初始化是始终会执行一次
    // console.log(changes, (Object.keys(changes)).length)
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      // console.log('changedProp.isFirstChange()', changedProp.isFirstChange())
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
