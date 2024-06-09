import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTransitionsComponent } from './pages/basic-transitions/basic-transitions.component';
import { Transform2DComponent } from './pages/transform-2d/transform-2d.component';

const routes: Routes = [
  { path: 'basic-transitions', component: BasicTransitionsComponent },
  { path: 'transform-2d', component: Transform2DComponent },
  { path: '', redirectTo: '/basic-transitions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
