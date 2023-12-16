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
import { AddCourseComponent } from "./add-course/add-course.component";
import { ReactiveFormsModule } from "@angular/forms";
import { I18nPipe } from "src/app/shared/pipes/i18n.pipe";

const routes: Routes = [
    {
        path: "detail", component: CourseDetailComponent
    },
    {
        path: "add", component: AddCourseComponent
    },
    {   
        path: ":id",
        component : CourseComponent, 
        resolve : {courseValue: CourseResolver}
    },
 
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
    declarations: [CourseComponent, CourseDetailComponent, AddCourseComponent, I18nPipe],
    exports: [],
    providers: [CourseResolver]
})
export class CourseModule {
    
}