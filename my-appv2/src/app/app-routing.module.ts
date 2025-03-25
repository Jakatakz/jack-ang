import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfeaturesComponent } from './components/myfeatures/myfeatures.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/parent/child1/child1.component';
import { Child2Component } from './components/parent/child2/child2.component';

const routes: Routes = [
  
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path: 'parent',
    loadChildren: () => import('./components/parent/parent.module').then(m => m.ParentModule)
  },
  {
    path: 'required-features',
    loadChildren: () => import('./components/feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
