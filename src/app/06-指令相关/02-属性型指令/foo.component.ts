import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foo-cpn',
  template: `
    <div >foo-cpn内容</div>
  `,

})
export class FooComponent {
  color = '';
  name = 'Amy'
  getName() {
    console.log(this.name)
  }
}
