import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { IonSlides, AlertController, ModalController } from "@ionic/angular";
import { Client } from "src/app/models/client.model";
import { ClientsService } from "src/app/services/clients/clients.service";
import { CommandesService } from "src/app/services/commandes/commandes.service";
import { commande } from "src/app/models/commande.model";
import { Devis } from "src/app/models/devis.model";
import { IonicSelectableComponent } from "ionic-selectable";
import { produit } from "src/app/models/produit.model";
import { CommandesProduitsService } from "src/app/services/commandes_produits/commandes-produits.service";
import { CommandProduits } from 'src/app/models/commande-produit.model';
import { ProduitsService } from 'src/app/services/produits/produits.service';
import { AjoutProduitPage } from '../../ajout-produit/ajout-produit/ajout-produit.page';

@Component({
  selector: "app-ajout-command",
  templateUrl: "./ajout-command.page.html",
  styleUrls: ["./ajout-command.page.scss"],
})
export class AjoutCommandPage implements OnInit {

  
  commandModel = new commande();
  clients: Client[];
  produits: produit[];
  commandes : commande[];
  commandesproduits: CommandProduits[];
  clientModel = new Client();
  clientcmd = new Client();
  produitModel = new produit();
  produitCmd : produit[];
  command_produit = new CommandProduits();
  num:number;
  //produitDevis = new Produit();
  @ViewChild("selectComponent") selectComponent: IonicSelectableComponent;
 
  selectedUsers = null;

  constructor(
    private modalcrtl: ModalController,
    private cmdprodservice: CommandesProduitsService,
    private _clientService: ClientsService,
    private service: CommandesService,
    private prodservice : ProduitsService,
  ) {
    
  }

  ngOnInit() {
    this._clientService.getAll().subscribe((client) => {
      this.clients = client;
    });

    this.cmdprodservice.getAll().subscribe((prod_Cmd)=>{
      this.commandesproduits = prod_Cmd;
    });
   
    this.service.getAll().subscribe((cmd)=>{
      this.commandes = cmd ;
      console.log(this.commandes);
    });
    

    this.prodservice.getAll().subscribe((produit)=> {
      this.produits = produit;
    });
  }
  
  submitForm1() {
     this.commandModel.id_client = this.clientcmd.id ;

     this.service.create(this.commandModel).subscribe(()=>{
       this.closeModal();
      
      });
  }

  async ajouterproduit(){

   
    this.num=(this.commandes[(this.commandes.length)-1].NumCmd)++;
   console.log(this.num+1);
    const modal = await this.modalcrtl.create({
        component:AjoutProduitPage,
        componentProps: {
         num: this.num+1
        }
    });
 
    return await modal.present().then(_ => {
 console.log('Receive:',this.num+1);
    });
     
   }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('produit:', event.value);
    this.produitCmd = event.value ;
  
  }

 


  confirm() {
    this.selectComponent.confirm();
    this.selectComponent.close();
  }

  closeModal() {
    this.modalcrtl.dismiss(null, "fermé");
  }
}
