import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandeModalPageRoutingModule } from './commande-modal-routing.module';

import { CommandeModalPage } from './commande-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandeModalPageRoutingModule
  ],
  declarations: [CommandeModalPage]
})
export class CommandeModalPageModule {}
