import { Component } from '@angular/core';

import { products } from '../products';
import { IsSingleServiceInstanceService } from '../is-single-service-instance.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  providers: [IsSingleServiceInstanceService],
})
export class ProductListComponent {
  constructor(
    private IsSingleServiceInstanceService: IsSingleServiceInstanceService
  ) {}
  products = [...products];

  share() {
    console.log('The product has been shared!');
  }

  notify(value: number) {
    console.log('价格:', value);
  }

  ngOnInit(): void {
    console.log(
      this.IsSingleServiceInstanceService.name,
      this.IsSingleServiceInstanceService.movies
    );
  }
}
