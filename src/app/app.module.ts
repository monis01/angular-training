import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './modules/courses/course-list/course-list.component';
import { CourseModule } from './modules/courses/courses.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

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
    CoreModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
