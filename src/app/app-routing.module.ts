import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings/paintings.component';
import { ClassesComponent } from './classes/classes.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PaintingsComponent,
    pathMatch: 'full',
  },
  {
    path: 'classes',
    component: ClassesComponent,
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
