import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Client } from 'src/app/models/client.model';
import { Ville } from 'src/app/models/ville.model';
import { VillesService } from 'src/app/services/villes/villes.service';
@Component({
  selector: 'app-ajou-modif-client',
  templateUrl: './ajou-modif-client.page.html',
  styleUrls: ['./ajou-modif-client.page.scss'],
})
export class AjouModifClientPage implements OnInit {

  // recevoir les données envoyés 
@Input() client : Client;
isUpdate = false; // vérifié si le model est utilisé pr la maj ou nn 
villes: Ville[] ;
clients : Client[];


// data to be updated 
clientModel = new Client();
 
villeModel = new Ville();
  


  constructor( private modalCrtl:ModalController ,
    private _clientService:ClientsService,
    private _villeService : VillesService) { }

  ngOnInit() {
    this._villeService.getAll().subscribe(villes=>{
      this.villes=villes;
     
    }); 
    if (this.client){ // if client is not null that means 
    // si le modal est on update mode     
    this.isUpdate= true;
    this.clientModel = this.client ;
    
    
    
  }
  }

  closeModal(){
    this.modalCrtl.dismiss(null, 'fermé');
   }
 
   
   onSubmit(){
 
     
 
      if(this.isUpdate){
        this._clientService.update(this.clientModel , this.client.id).subscribe(()=>
        {
           
          this.modalCrtl.dismiss(this.clientModel,'updated');
          
        });

      } else {
      

        this._clientService.create(this.clientModel).subscribe(response =>
          {this.modalCrtl.dismiss(response,'created');
  
        });
  
       }
       
    
    }
  

}
