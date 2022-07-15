import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-nonestyle',
//   templateUrl: './nonestyle.component.html',
//   styleUrls: ['./nonestyle.component.less']
// })
// export class NonestyleComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

@Component({
  selector: 'app-nonestyle',
  template: `
    <h2 class="emulated-h2">None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styleUrls: ['./nonestyle.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NonestyleComponent {}
