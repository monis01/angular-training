import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class CourseResolver {
  constructor() {
  }
  resolve(route: ActivatedRouteSnapshot) {
    return [
        {
          id: 1,
          price: 21.99,
        },
        {
          id: 2,
          price: 29.99,
        },
        {
          id: 3,
          price: 35.99,
        },
        {
          id: 4,
          price: 55.99,
        },
      ];
    
  }
}