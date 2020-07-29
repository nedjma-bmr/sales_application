import { Component, OnInit } from '@angular/core';
import { CommandesService } from 'src/app/services/commandes/commandes.service';
import { commande } from 'src/app/models/commande.model';
import { ModalController } from '@ionic/angular';
import { ClientModalPage } from '../client-modal/client-modal.page';
import { CommandeModalPage } from '../commande-modal/commande-modal/commande-modal.page';
import { ClientsPage } from '../clients/clients.page';
import { Router } from '@angular/router';
import { AjoutCommandPage } from '../ajout-command/ajout-command/ajout-command.page';
import { Client } from 'src/app/models/client.model';
import { AjoutProduitPage } from '../ajout-produit/ajout-produit/ajout-produit.page';
import { CommandProduits } from 'src/app/models/commande-produit.model';
import { CommandesProduitsService } from 'src/app/services/commandes_produits/commandes-produits.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {
  commandes:commande[];
  displayCommandes:commande[];
  gender:string;
  clientModel = new Client();
  commandesproduits: CommandProduits[];
  constructor(private service:CommandesService,
    private modalCtrl:ModalController,
    private router:Router,
    private cmdprodservice: CommandesProduitsService,) { }

  ngOnInit() {
    this.service.getAll().subscribe(data=>{
      this.commandes=data;
      this.displayCommandes=data;
    });
    
    this.cmdprodservice.getAll().subscribe((prod_Cmd)=>{
      this.commandesproduits = prod_Cmd;
    });
  }
 
 

  async filterList(evt) {
 
    const searchTerm = evt.target.value.toLowerCase();
  if (this.gender=="numero") { 
    if (searchTerm === "") {
      this.displayCommandes = this.commandes;
    }
    else
    {
    this.displayCommandes = this.commandes.filter((currentCmd)=> {
      
        return (currentCmd.NumCmd.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });
      }
    } else if (this.gender=="date") {
  
      if (searchTerm === "") {
        this.displayCommandes = this.commandes;
      }
      else
      {
      this.displayCommandes = this.commandes.filter((currentCmd)=> {
        
          return (currentCmd.date.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
        }
  
  
    }
  }
  
 async ajouterproduit(number:number){
   const modal = await this.modalCtrl.create({
       component:AjoutProduitPage,
       componentProps: {
        num: number 
       }
   });

   return await modal.present().then(_ => {
console.log('Receive:',number);
   });
    
  }

  ajoutercmd(){
    this.modalCtrl
    .create({
      component: AjoutCommandPage,
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(({data,role}) =>{
      if (role==='created'){
        this.commandes.push(data);
      }
    });
    
  }

}
