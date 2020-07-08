import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitModalPage } from './produit-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitModalPageRoutingModule {}
