import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisPageRoutingModule } from './devis-routing.module';

import { DevisPage } from './devis.page';

import { DetailDevisComponent } from '../detail-devis/detail-devis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisPageRoutingModule
  ],
  declarations: [DevisPage, DetailDevisComponent],
  entryComponents: [DetailDevisComponent]
})
export class DevisPageModule {}
