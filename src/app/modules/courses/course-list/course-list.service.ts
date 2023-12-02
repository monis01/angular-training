import { Injectable } from "@angular/core";

@Injectable()
export class CourseListService {
    
    public getCourseListData(){
        return  [
            {   id:1,
                name : "Angular basic 101",
                author : "Arthur",
                description : "This is a basic course",
                tags : ["Javascript", "Typescript", "Frontend"],
                price: 0
            },
            {   
                id:2,
                name : "React basic 101",
                author : "Arthur",
                description : "This is a basic course",
                tags : ["Javascript", "Typescript", "Frontend"],
                price: 0
            },
            {
                id: 3,
                name : "jQuery 101",
                author : "Arthur",
                description : "This is a basic course",
                tags : ["Javascript", "Frontend"],
                price: 0
            },
            {   
                id:4,
                name : "Vue 101",
                author : "Arthur",
                description : "This is a basic course",
                tags : ["Javascript", "Typescript", "Frontend"],
                price: 0
            },
        ]
    }
}