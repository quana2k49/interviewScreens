import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathmaticComponent } from './screens/mathmatic/mathmatic.component'
import { WeatherstackComponent } from './screens/weatherstack/weatherstack.component'

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherstackComponent
  },
  {
    path: 'mathmatic',
    component: MathmaticComponent
  },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: WeatherstackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
