import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanplacePageRoutingModule } from './scanplace-routing.module';

import { ScanplacePage } from './scanplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanplacePageRoutingModule
  ],
  declarations: [ScanplacePage]
})
export class ScanplacePageModule {}
