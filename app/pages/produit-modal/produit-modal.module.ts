import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitModalPageRoutingModule } from './produit-modal-routing.module';

import { ProduitModalPage } from './produit-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitModalPageRoutingModule
  ],
  declarations: [ProduitModalPage]
})
export class ProduitModalPageModule {}
