import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-sddom',
//   templateUrl: './sddom.component.html',
//   styleUrls: ['./sddom.component.less']
// })
// export class SddomComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

@Component({
  selector: 'app-sddom',
  template: `
    <h2 class="emulated-h2">ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated></app-emulated>
    <app-nonestyle></app-nonestyle>
  `,
  // templateUrl: './sddom.component.html',
  styleUrls: ['./sddom.component.less'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SddomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
