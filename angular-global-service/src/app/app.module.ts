import { CreateCourseComponent } from './course/component/create-course/create-course.component';
import { CoursesListComponent } from './course/component/courses-list/courses-list.component';
import { CourseModule } from './course/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    // resolve: {
    //   courses: CourseResolver
    // }
  },
  {path: 'create-course', component: CreateCourseComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
