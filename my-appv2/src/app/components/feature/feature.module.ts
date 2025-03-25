import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module'

import { FeatureComponent } from './feature.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ObpComponent } from './obp/obp.component';
import { OnetimepaymentComponent } from './onetimepayment/onetimepayment.component';
import { ReportComponent } from '../report/report.component';
import { AccountingComponent } from './accounting/accounting.component';
//import { HomeComponent } from '../home/home.component';
//import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    FeatureComponent,
    InvoiceComponent,
    ObpComponent,
    OnetimepaymentComponent,
    ReportComponent,
    AccountingComponent
    //HomeComponent,
    //AboutComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
