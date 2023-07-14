import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car/car.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {path: 'strona1',data: {title: 'My Title'}, component: CarComponent},
  {path: 'strona2', component: Test2Component, data: {title: 'My Title'} },
  {path: 'strona/:id', component: TestComponent, 
  children: [
    {path: 'strona1', component: CarComponent},
    // {path: '', redirectTo: 'strona2', pathMatch: 'full'},
    {path: 'strona2', component: Test2Component}
  ]},
  {path: '', redirectTo: 'strona2', pathMatch: 'full'},
  {path: '**', redirectTo: 'strona1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
