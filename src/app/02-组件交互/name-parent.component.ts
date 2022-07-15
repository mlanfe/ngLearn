import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>Master controls {{ names.length }} names</h2>

    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
    <button (click)="addName()">点击</button>
  `,
})
export class NameParentComponent {
  // Displays 'Dr IQ', '<no name set>', 'Bombasto'
  names = ['Dr IQ', '   ', '  Bombasto  '];
  addName() {
    this.names[0] += '!';
    this.names.push('Amy');
  }
}
