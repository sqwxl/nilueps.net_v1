import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings/paintings.component';
import { CoursesComponent } from './courses/courses.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PaintingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
