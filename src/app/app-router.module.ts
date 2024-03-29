import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
