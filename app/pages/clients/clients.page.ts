import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { AlertController, ModalController, ActionSheetController } from '@ionic/angular';
import { ClientModalPage } from '../client-modal/client-modal.page';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Devis } from 'src/app/models/devis.model';
import { AjouModifClientPage } from '../ajou-modif-client/ajou-modif-client.page';





@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})

export class ClientsPage implements OnInit {
gender : string ='' ; 
//liste de tout les clients  
clients: Client[];
clientModel = new Client();
//liste des client affichés
displayClients:Client[];
  devis:Devis[];
 

  constructor(
    private _clientService:ClientsService ,
     private alertCtrl: AlertController , 
     private modalCtrl: ModalController , 
     private router : Router , 
       
     ) { }
// lancer à l'initialisation de la page
/**
 * permet d'afficher la liste des clients dans le navigateaur au lancement de l'application 
 */
   ngOnInit()  {
    this._clientService.getAll().subscribe(data=>{
      this.clients=data;
      this.displayClients = data;
    }); 

    
    
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
  

  
  addClient(){
    this.modalCtrl
    .create({
      component: ClientModalPage
    })
     .then(modal => {
       modal.present();
       return modal.onDidDismiss();
     })
     .then(({data,role}) =>{
       if (role==='created'){
         this.displayClients.push(data);
       }
     });
  }



  updateClient(client:Client){
     this.modalCtrl
     .create({
       component: AjouModifClientPage,
       // il faut passer l'objet client au model
       componentProps: {client}
     })
      .then (modal => {
        modal.present() ;
       return modal.onDidDismiss();
  }).then (({data, role}) =>{
    this.clients = this.clients.filter(std => {
      if (this.clientModel.id=== std.id){
        return data ; // return updated client 
      }
      return std;
    })
  });


  }




  removeClient(id:string){
    this.alertCtrl.create({
      header:'Supprimer',
      message: 'Etes vous sur ?',
      buttons:[
        {
        text:'Oui',
        handler :() => {
          this._clientService.remove(id).subscribe((data)=>{
            if(data.status == "success"){
             
            this.displayClients = this.clients.filter(elem => elem.id !== id);// elem :parametre pr pointer les elements de la liste des clients 
            }else{
              console.error(data.message);
            }
          });
        }
      },
      { text: 'Non'}
      ]
      
  
      
    }).then (alertEl => alertEl.present());
    
  }

openDetail(clientId: string){
  this._clientService.setCurrentClientId(clientId);
  this.router.navigateByUrl('/detail-client');
  
}
 
}
