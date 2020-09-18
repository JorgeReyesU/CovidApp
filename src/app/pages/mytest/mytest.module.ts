import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MytestPageRoutingModule } from './mytest-routing.module';

import { MytestPage } from './mytest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MytestPageRoutingModule
  ],
  declarations: [MytestPage]
})
export class MytestPageModule {}
