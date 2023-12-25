import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit{

  constructor(private cdr: ChangeDetectorRef){

  }
  @Input() data!: string[];


  ngOnInit(): void {

    
    // // 'of' allows you to deliver values in a sequence. In this case, it will emit 1,2,3,4,5 in order.
    // const dataSource = of(1, 2, 3, 4, 5);
    // // subscribe to our source observable
    // const subscription = dataSource
    // .pipe(map(item => item+1), filter(item => item > 3))
    // .subscribe(value => {
      
    // });

    
    const subject = new Subject();
    subject.next(25);
    subject.subscribe((item) => {
      console.log("values : ",item);
    })
    subject.next(125);


    const bSubject = new BehaviorSubject(235);
    bSubject.next(25);
    bSubject.subscribe((value) => {

      console.log("Valuessss: :: ",value);
    })
     
  }

  refresh(){
    this.cdr.detectChanges()
    //  pressing the Refresh button will run change detection on the component and an update will be performed.
  }
}

/**
 * Detect Changes : detectChanges() 
    1. detectChanges() actually triggers change detection
    2. This one is used to run change detection for the tree of components starting with the component that you trigger detectChanges() on. 
        So the change detection will run for the current component and all its children
    3. will run change detection immediately from the current component down through its descendants.

 * Mark for check : markForCheck()
    1. doesn't trigger change detection.
    2. will not run change detection, but mark its ancestors as needing to run change detection. 
       Next time change detection runs anywhere, it will run also for those components which were marked.
 */

// https://www.youtube.com/watch?v=OcphK_aEd7I
// https://hackernoon.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f
// https://dev.to/this-is-angular/angular-change-detection-detaching-the-change-detector-3d8i