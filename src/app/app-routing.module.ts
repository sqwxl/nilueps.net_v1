import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings/paintings.component';
import { lessonsComponent } from './lessons/lessons.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PaintingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'lessons',
    component: lessonsComponent,
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
