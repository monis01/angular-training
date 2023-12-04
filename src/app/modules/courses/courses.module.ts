import { NgModule, } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CourseComponent } from "./course-list/course-list.component";
import { CommonModule } from "@angular/common";
import { CourseListService } from "./course-list/course-list.service";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { CourseResolver } from "./course.resolver";
import { HighlightDirective } from "src/app/shared/directives/highlight.directive";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";

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
    imports:[CommonModule, RouterModule.forChild(routes), SharedModule],
    declarations: [CourseComponent, CourseDetailComponent],
    exports: [],
    providers: [CourseResolver]
})
export class CourseModule {
    
}