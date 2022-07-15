import { Injectable } from '@angular/core';

@Injectable()
export class IsSingleServiceInstanceService {
  name = 'Amy'
  movies = ['星际穿越', '机器人总动员']

  constructor() { }
  

  // console.log(
  //   this.cartService.name, this.cartService.movies
  // )
  // this.cartService.name = 'Tom'
  // this.cartService.movies.push('testMovie')
}
