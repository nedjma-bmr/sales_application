import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis/devis.service';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Client } from 'src/app/models/client.model';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormGroup, Validators } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits/produits.service';
import { AjouterDevisProduitPage } from '../ajouter-devis-produit/ajouter-devis-produit.page';
import { type } from 'os';



@Component({
  selector: 'app-ajouter-devis',
  templateUrl: './ajouter-devis.page.html',
  styleUrls: ['./ajouter-devis.page.scss'],
})
export class AjouterDevisPage implements OnInit {
  

  devisModel = new Devis();
  devis: Devis[];
  clients : Client[];
  clientModel = new Client();
  clientDevis = new Client();
  //produitDevis = new Produit();
    @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  
  
  selectedUsers = null;
  

  
  
  constructor(private modalCrtl:ModalController ,
    private _devisService : DevisService,
    private _clientService: ClientsService 
   ) { }

   
  ngOnInit() {
    this._clientService.getAll().subscribe(client=>{
      this.clients=client;
     
     
    }); 
  
  }
  
  
 

   submitForm() {
     //Ajouter client au devis
     this.devisModel.id_client = this.clientDevis.id;
     this.devisModel.design_client = this.clientDevis.design_client;
    this._devisService.create(this.devisModel).subscribe(response =>
      {this.modalCrtl.dismiss(response,'created');

    });
  }
  
  confirm() {
		this.selectComponent.confirm();
		this.selectComponent.close();
  }
  



  closeModal(){
    this.modalCrtl.dismiss(null, 'fermé');
   }
}
