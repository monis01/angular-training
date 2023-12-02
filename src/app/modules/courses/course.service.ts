import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CourseService {
 

    public courseCommunication: Subject<any> = new Subject();

    // public compAtoB: Subject<any> = new Subject();

    // public compBtoA: Subject<any> = new Subject();
    
    constructor(){
       
    }
}