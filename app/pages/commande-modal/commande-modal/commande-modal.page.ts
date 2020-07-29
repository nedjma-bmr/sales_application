import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { commande } from 'src/app/models/commande.model';
import { NgForm } from '@angular/forms';
import { CommandesService } from 'src/app/services/commandes/commandes.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-commande-modal',
  templateUrl: './commande-modal.page.html',
  styleUrls: ['./commande-modal.page.scss'],
})
export class CommandeModalPage implements OnInit {
  gender : string ='' ; 
//liste de tout les clients  
clients: Client[];
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
//liste des client affichés
displayClients:Client[];
items=[];
  @Input() cmd: commande;
  isUpdate = false;
  constructor( private modalCrtl: ModalController,
    private service: CommandesService,
    private _clientService:ClientsService ,
     private alertCtrl: AlertController , 
     private modalCtrl: ModalController , 
     private router : Router)
     { 
      for (var i = 0; i < 30; i++) {
        this.items.push( i );
      }
     }
 
    data = {
      NumCmd:0,
      date: "",
    }
  ngOnInit(){
    if (this.cmd) {
    // if client is not null that means
    // si le modal est on update mode
    this.isUpdate = true; 
    this.data = this.cmd;
  }
  } 
    
  
  closeModal(){
    this.modalCrtl.dismiss(null, 'fermé');
   }


   onSubmit(form: NgForm) {
    const cmd = form.value;

    if (this.isUpdate) {
      this.service.update(cmd, this.cmd.NumCmd).subscribe(() => {
        // l'ajouter a l objet etudiant maj
        cmd.date = this.cmd.NumCmd;
        this.modalCrtl.dismiss(cmd, "updated");
      });
    } else {
      this.service.create(cmd).subscribe((response) => {
        this.modalCrtl.dismiss(response, "created");
      });
    }
  }

  async filterList(evt) {
 
    const searchTerm = evt.target.value.toLowerCase();
  if (this.gender=="nom") { 
    if (searchTerm === "") {
      this.displayClients = this.clients;
    }
    else
    {
    this.displayClients = this.clients.filter((currentClient)=> {
      
        return (currentClient.design_client.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });
      }
    } else if (this.gender=="code") {
  
      if (searchTerm === "") {
        this.displayClients = this.clients;
      }
      else
      {
      this.displayClients = this.clients.filter((currentClient)=> {
        
          return (currentClient.code_client.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
        }
  
  
    }
  }
   

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push(i);
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
 

  

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.displayClients.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}


