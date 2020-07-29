import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterDevisProduitPageRoutingModule } from './ajouter-devis-produit-routing.module';

import { AjouterDevisProduitPage } from './ajouter-devis-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterDevisProduitPageRoutingModule
  ],
  declarations: [AjouterDevisProduitPage]
})
export class AjouterDevisProduitPageModule {}
