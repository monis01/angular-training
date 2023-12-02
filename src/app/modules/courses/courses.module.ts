import { NgModule } from "@angular/core";
import { CourseComponent } from "./course-list/course-list.component";
import { CommonModule } from "@angular/common";
import { CourseListService } from "./course-list/course-list.service";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { CourseResolver } from "./course.resolver";
import { HighlightDirective } from "src/app/shared/directives/highlight.directive";

const routes: Routes = [
    // {
    //     path: "", redirectTo: "list", pathMatch:"full"
    // },
    {
        
        path: ":id",
        component : CourseComponent, 
        resolve : {courseValue: CourseResolver}
    },
    {
        path: "detail", component: CourseDetailComponent
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes)],
    declarations: [CourseComponent, CourseDetailComponent],
    exports: [],
    providers: [CourseResolver]
})
export class CourseModule {
    
}