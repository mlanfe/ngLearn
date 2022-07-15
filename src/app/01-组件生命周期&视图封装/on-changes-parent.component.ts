import { Component, ViewChild } from '@angular/core';

import { Hero } from './hero';
import { OnChangesComponent } from './on-changes.component';

@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['']
})
export class OnChangesParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.hero = new Hero('Windstorm');
    // this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // console.log('==========reset');
    
    // this.hero.name = 'tst';
    // setting power only triggers onChanges if this value is different
    // this.power += '!';
    // if (this.childView) {
    //   this.childView.reset();
    // }
  }
}
