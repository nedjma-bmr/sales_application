import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouModifClientPage } from './ajou-modif-client.page';

const routes: Routes = [
  {
    path: '',
    component: AjouModifClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouModifClientPageRoutingModule {}
