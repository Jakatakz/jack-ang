import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureComponent } from './feature.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ObpComponent } from './obp/obp.component';
import { OnetimepaymentComponent } from './onetimepayment/onetimepayment.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from '../report/report.component';
import { AccountingComponent } from './accounting/accounting.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      { path: 'invoice', component: InvoiceComponent },
      { path: 'obp', component: ObpComponent },
      { path: 'onetimepayment', component: OnetimepaymentComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'report', component: ReportComponent },
      { path: 'accounting/:id', component: AccountingComponent },
      { path: '', redirectTo: 'invoice', pathMatch: 'full' },
      { path: 'other-module-to-lazy-load', loadChildren: () => import('./other-module-to-lazy-load/other-module-to-lazy-load-routing.module').then(m => m.OtherModuleToLazyLoadRoutingModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
