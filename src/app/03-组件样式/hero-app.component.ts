import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './hero-app.component.html',
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing', 'tst']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
