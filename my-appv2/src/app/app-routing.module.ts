import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfeaturesComponent } from './components/myfeatures/myfeatures.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';

const routes: Routes = [
  
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path: 'parent', component:ParentComponent,
    children: [
      {
        path: 'child1', component: Child1Component
      },
      {
        path: 'child2', component: Child2Component
      }
    ]
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
