import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import {DevisProduits} from 'src/app/models/devis-produits.model'
import {DevisProduitsService} from 'src/app/services/devis-produits/devis-produits.service';
import { produit } from 'src/app/models/produit.model';
import { Devis } from 'src/app/models/devis.model';
import { $ } from 'protractor';
@Component({
  selector: 'app-produits-devis',
  templateUrl: './produits-devis.page.html',
  styleUrls: ['./produits-devis.page.scss'],
})
export class ProduitsDevisPage implements OnInit {

  @Input() DevisId: string;
  
  devisProd : DevisProduits[];
  produits : produit[] ;
  devisProdModel = new DevisProduits();
  edited = false;
 

  constructor(private modalCtrl:ModalController,
    private  _devisProduitsService: DevisProduitsService,
    private alertCtrl: AlertController ) { 
     
    }

  ngOnInit() {
      
    this._devisProduitsService.get(this.DevisId).subscribe(
      (listDevis =>{this.devisProd = listDevis;
       })); 
           
  }

  increase(product: DevisProduits){
        this.edited = true;
       
        product.qte++;
     
  }
  
  decrease(product : DevisProduits){
    this.edited = true;
    
    product.qte--;
  
  }
 
  Submit(){
  
    
  
  }
   
  
  
  dismissModal(){
    this.modalCtrl.dismiss();
    
  }

}

