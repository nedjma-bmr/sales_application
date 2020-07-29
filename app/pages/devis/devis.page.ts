import { Component, OnInit } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis/devis.service';
import { Client } from 'src/app/models/client.model';
import { ModalController, IonRouterOutlet } from '@ionic/angular';

import { DetailDevisComponent } from '../detail-devis/detail-devis.component';


import { AjouterDevisPage } from '../ajouter-devis/ajouter-devis.page';
  
@Component({
  selector: 'app-devis',
  templateUrl: './devis.page.html',
  styleUrls: ['./devis.page.scss'],
})
export class DevisPage implements OnInit {
  devis : Devis[];
  clients : Client[];
  clientModel = new Client();
  devisModel = new Devis();
  
  constructor(private _devisService: DevisService, 
   
    private modalCtrl: ModalController, 
    private routerOutlet : IonRouterOutlet
  ) { }

  ngOnInit() { 
 
    this._devisService.getAll().subscribe(data=>{
      this.devis=data;
    }); 

    
  
}

async openModal(id:string){
   
  
 
    const modal = await this.modalCtrl.create({
  component: DetailDevisComponent, 
 
  cssClass: 'my-modal',
  swipeToClose: true , 
  presentingElement: this.routerOutlet.nativeEl
});

return  await modal.present();
}


ajouterDevis(){
  this.modalCtrl
  .create({
    component: AjouterDevisPage,
  })
  .then(modal => {
    modal.present();
    return modal.onDidDismiss();
  })
  .then(({data,role}) =>{
    if (role==='created'){
      this.devis.push(data);
    }
  });
}
}