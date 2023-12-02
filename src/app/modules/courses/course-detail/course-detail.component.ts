import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CourseService } from "../course.service";
import { filter } from "rxjs";

@Component({
    selector: "app-course-detail",
    templateUrl: "./course-detail.component.html",
    styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit, OnChanges{

    constructor(private readonly courseService: CourseService){}
    
    @Input()
    public courseInfoPC: any;

    public courseDetailDescription = [
        {
            id: 1, 
            detailDescription : ""
        },
        {
            id: 2, 
            detailDescription : ""
        },
        {
            id: 3, 
            detailDescription : ""
        },
        {
            id: 4, 
            detailDescription : ""
        }
    ]

    
    ngOnInit(): void {
        this.courseService.courseCommunication
        .pipe(filter(value => value.type === "A"))
        .subscribe({
                next: (value: any) =>{
                    console.log("Subscribe from Course Detail component", value);
                    // this.courseInfoPC = value;
                }
        })
        
        setTimeout(()=>{
            console.log("Emit from Course Detail component")
            this.courseService.courseCommunication.next({type: "B", data: {}});
        }, 1000 * 15);
    }

    ngOnChanges(changes: SimpleChanges): void {
      
    }
}