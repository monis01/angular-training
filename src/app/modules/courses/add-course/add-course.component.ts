import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-add-course",
    templateUrl : "./add-course.component.html"
})
export class AddCourseComponent implements OnInit{

    addCourseForm!: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        
        this.initForm();
    }

    private initForm(){
        this.addCourseForm = new FormGroup({
            name : new FormControl("", Validators.required),
            author : new FormControl(""),
            description : new FormControl(""),
            price: new FormControl(0),
            active: new FormControl(false)
        });
    }

    createCourse(courseForm: FormGroup){
        console.log(courseForm.value)
        if(!courseForm.valid) return;
        // send value to server
    }
    
}















// - valid: This property returns true if the element’s contents are valid and false otherwise.
// - invalid: This property returns true if the element’s contents are invalid and false otherwise.
// = pristine: This property returns true if the element’s contents have not been changed.
// - dirty: This property returns true if the element’s contents have been changed.

// - untouched: This property returns true if the user has not visited the element.
// - touched: This property returns true if the user has visited the element.