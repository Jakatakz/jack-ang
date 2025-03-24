import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { FeatureComponent } from './feature/feature.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ObpComponent } from './obp/obp.component';
import { OnetimepaymentComponent } from './onetimepayment/onetimepayment.component';
import { ReportComponent } from './report/report.component';
import { AccountingComponent } from './accounting/accounting.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    FeatureComponent,
    InvoiceComponent,
    ObpComponent,
    OnetimepaymentComponent,
    ReportComponent,
    AccountingComponent,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
