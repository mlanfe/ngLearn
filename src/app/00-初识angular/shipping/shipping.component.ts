import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { IsSingleServiceInstanceService } from '../is-single-service-instance.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less'],
  providers: [IsSingleServiceInstanceService],
})
export class ShippingComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private IsSingleServiceInstanceService: IsSingleServiceInstanceService
  ) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();

    this.IsSingleServiceInstanceService.name = 'Tom';
    this.IsSingleServiceInstanceService.movies.push('testMovie');
    console.log(
      this.IsSingleServiceInstanceService.name,
      this.IsSingleServiceInstanceService.movies
    );
  }
}
