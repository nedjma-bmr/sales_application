import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouModifClientPageRoutingModule } from './ajou-modif-client-routing.module';

import { AjouModifClientPage } from './ajou-modif-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AjouModifClientPageRoutingModule
  ],
  declarations: [AjouModifClientPage]
})
export class AjouModifClientPageModule {}
