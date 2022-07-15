import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-emulated',
//   templateUrl: './emulated.component.html',
//   styleUrls: ['./emulated.component.less']
// })
// export class EmulatedComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

@Component({
  selector: 'app-emulated',
  template: `
    <h2 class="emulated-h2">Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-nonestyle></app-nonestyle>
  `,
  styleUrls: ['./emulated.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedComponent {}
