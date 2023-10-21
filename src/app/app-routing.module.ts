import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'pavangokul |software engineer'},
  {path:'home',component:HomeComponent,title:'pavangokul |software engineer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
