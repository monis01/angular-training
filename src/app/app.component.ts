import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(){
    console.log("Online chnagesssss")
  }

  public counter = 0;
  public coursePriceList = [
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

  public courseInfoPCD = {};

  htmlToTSEvent(event: any){
    console.log("child event captured", event)
    // this.counter++;
  }

  courseDetail(event: any){
    console.log("Show details for this course : ", event);
    this.courseInfoPCD = event.description;
  }
}
