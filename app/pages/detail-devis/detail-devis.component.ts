import { Component, OnInit , Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
 import { Devis } from 'src/app/models/devis.model';

import {DevisProduits} from 'src/app/models/devis-produits.model'
import { ProduitsDevisPage } from '../produits-devis/produits-devis.page';
@Component({
  selector: 'app-detail-devis',
  templateUrl: './detail-devis.component.html',
  styleUrls: ['./detail-devis.component.scss'],
})
export class DetailDevisComponent  {
  
  devisProd: DevisProduits[];
 
    constructor(private modalCtrl:ModalController,
   ) { }
  
  
  dismissModal(){
    this.modalCtrl.dismiss();
  }
  async openModal(id:string){
   
    
    
      const modal = await this.modalCtrl.create({
    component: ProduitsDevisPage,
    componentProps: {'DevisId' : id}, 
    swipeToClose: true , 
   
  });
  
  return  await modal.present();
  }
}
