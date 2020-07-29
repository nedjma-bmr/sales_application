import { Component, OnInit , ViewChild  } from '@angular/core';
import { IonSlides, ModalController, AlertController } from '@ionic/angular';
import { Client } from 'src/app/models/client.model';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;
  gender : string ='' ; 
  //liste de tout les clients  
  clients: Client[];
  
  //liste des client affichés
  displayClients:Client[];
  constructor(private _clientService:ClientsService ,
    private alertCtrl: AlertController , 
    private modalCtrl: ModalController , 
    private router : Router
  ) { }

  ngOnInit() {
    this._clientService.getAll().subscribe(data=>{
      this.clients=data;
      this.displayClients = data;
  });
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
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
    
  

}
