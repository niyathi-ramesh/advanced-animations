import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTransitionsComponent } from './pages/basic-transitions/basic-transitions.component';

const routes: Routes = [
  { path: 'basic-transitions', component: BasicTransitionsComponent },
  { path: '', redirectTo: '/basic-transitions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
