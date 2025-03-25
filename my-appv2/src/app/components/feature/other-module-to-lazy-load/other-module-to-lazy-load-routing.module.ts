import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherModuleToLazyLoadComponent } from './other-module-to-lazy-load.component';

const routes: Routes = [{ path: '', component: OtherModuleToLazyLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherModuleToLazyLoadRoutingModule { }
