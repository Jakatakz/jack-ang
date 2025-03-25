import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherModuleToLazyLoadRoutingModule } from './other-module-to-lazy-load-routing.module';
import { OtherModuleToLazyLoadComponent } from './other-module-to-lazy-load.component';


@NgModule({
  declarations: [
    OtherModuleToLazyLoadComponent
  ],
  imports: [
    CommonModule,
    OtherModuleToLazyLoadRoutingModule
  ]
})
export class OtherModuleToLazyLoadModule { }
