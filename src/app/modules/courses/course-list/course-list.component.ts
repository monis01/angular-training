import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CourseListService } from "./course-list.service";
import { CourseService } from "../course.service";
import { filter } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseListService],
})
export class CourseComponent implements OnInit {
  /**
   * It will hold values
   */
  @Input()
  public childData: any;

  @Output()
  public htmlToTS: EventEmitter<number> = new EventEmitter();

  @Output()
  public courseEvent: EventEmitter<any> = new EventEmitter();

  constructor(private courseListService: CourseListService, private readonly courseService: CourseService, private aRoute: ActivatedRoute) {}

  public courseList: any[] = [];

  ngOnInit(): void {
   this.aRoute.data.subscribe((value) =>{
    const {courseValue} = value ;
    this.childData = courseValue;
   })
    const courseListFromService = this.courseListService.getCourseListData(); // service
    courseListFromService.forEach((course, index) => {
      course.price = this.childData[index].price; // parent component
    });
    this.courseList = [...courseListFromService];

    this.courseService.courseCommunication
    .pipe(filter(value => value.type === "B"))
    .subscribe({
      next: (value: any) =>{
          console.log("Subscribe from  Course List component : ", value);
      }
    })
   
  }

  addToCart(course: object) {
    console.log('selected course : ', course);
    this.htmlToTS.emit((<any>course).id);
  }

  showCourseDetail(course: object){
    // console.log('course detail for: ', course);
    // this.courseEvent.emit((<any>course));
    console.log("Emit from Course List component")
    this.courseService.courseCommunication.next({type: "A", data: course});
  }
}