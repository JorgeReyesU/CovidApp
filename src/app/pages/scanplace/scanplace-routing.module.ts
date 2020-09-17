import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanplacePage } from './scanplace.page';

const routes: Routes = [
  {
    path: '',
    component: ScanplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanplacePageRoutingModule {}
