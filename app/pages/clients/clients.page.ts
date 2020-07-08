import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ClientModalPage } from '../client-modal/client-modal.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})

export class ClientsPage implements OnInit {
gender : string ='' ; 
//liste de tout les clients  
clients: Client[];

//liste des client affichés
displayClients:Client[];

  constructor(
    private _clientService:ClientsService ,
     private alertCtrl: AlertController , 
     private modalCtrl: ModalController , 
     private router : Router
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
       component: ClientModalPage,
       // il faut passer l'objet client au model
       componentProps: {client}
     })
      .then (modal => {
        modal.present() ;
       return modal.onDidDismiss();
  }).then (({data, role}) =>{
    this.clients = this.clients.filter(std => {
      if (data.id=== std.id){
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

openDetail(){
  this.router.navigateByUrl('/details');
}
 
}
