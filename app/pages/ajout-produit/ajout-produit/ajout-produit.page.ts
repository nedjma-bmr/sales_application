import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandesProduitsService } from 'src/app/services/commandes_produits/commandes-produits.service';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { CommandesService } from 'src/app/services/commandes/commandes.service';
import { ProduitsService } from 'src/app/services/produits/produits.service';
import { CommandProduits } from 'src/app/models/commande-produit.model';
import { produit } from 'src/app/models/produit.model';
import { commande } from 'src/app/models/commande.model';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FamilleService } from 'src/app/services/famille.service';
import { famille } from 'src/app/models/famille.model';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.page.html',
  styleUrls: ['./ajout-produit.page.scss'],
})
export class AjoutProduitPage implements OnInit {
  
  @Input() public num:number;

  commandesproduits: CommandProduits[];
  produitModel = new produit();
  
  produitModel1 = new produit();
  produitCmd = new produit();
  
  produits: produit[];
   familles: famille[];
  command_produit = new CommandProduits();
  displayProduit: produit[];
  familleModel= new famille();
  commandesproduits1: CommandProduits[]=[];
  

  constructor(
    private modalCrtl: ModalController,
    private cmdprodservice: CommandesProduitsService,
    private prodservice : ProduitsService,
    private servicefam : FamilleService,
  ) { }

  ngOnInit() {
    this.servicefam.getAll().subscribe((fam)=>{
       this.familles = fam ;
    });

    this.cmdprodservice.getAll().subscribe((prod_Cmd)=>{
      this.commandesproduits = prod_Cmd;
      console.log(this.commandesproduits);
    });


    this.prodservice.getAll().subscribe((produit)=> {
      this.produits = produit;
      this.displayProduit = produit ;
    });
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.produitCmd = event.value
  }
  portChange2(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.familleModel = event.value;
    
    this.displayProduit = this.produits.filter((currentproduit)=> {
      currentproduit.code_fami =   this.familleModel.code_fam; 
      return (currentproduit.code_fami.toLowerCase().indexOf(this.familleModel.code_fam.toLowerCase()) > -1);
    });
  }

  submitForm() {
    //Ajouter client au devis
    this.modalCrtl.dismiss().then(()=>{
      
      console.log("fin de la selection des produits !");
    }
    ) ;

    }
  

valider(){
  this.command_produit.id_produit = this.produitCmd.id_prod ;
  this.command_produit.Num_cmd = this.num ;
  this.cmdprodservice.create(this.command_produit).subscribe(
    (cmdprod)=>{
      this.commandesproduits1.push(this.command_produit);
    }
  );
}

  filterList(evt:any) {
   
     
 }
      
      
}
