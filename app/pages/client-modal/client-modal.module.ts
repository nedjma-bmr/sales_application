import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientModalPageRoutingModule } from './client-modal-routing.module';

import { ClientModalPage } from './client-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientModalPageRoutingModule
  ],
  declarations: [ClientModalPage]
})
export class ClientModalPageModule {}
