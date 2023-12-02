import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './modules/courses/course-list/course-list.component';
import { CourseModule } from './modules/courses/courses.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "course", 
    loadChildren : () => import("./modules/courses/courses.module").then(m => m.CourseModule),
    title : "Course University"
  },
  // {
  //   path: "course", component: CourseComponent
  // }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
