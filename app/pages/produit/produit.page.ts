import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits/produits.service';
import { produit } from 'src/app/models/produit.model';
import { famille } from 'src/app/models/famille.model';
import { AlertController, ModalController } from '@ionic/angular';
import { FamilleService } from 'src/app/services/famille.service';
import { ProduitModalPage } from '../produit-modal/produit-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  gender : string ='' ; 
   produits:produit[];
   familles:famille[];
  displayProduits:produit[];
 
  constructor(private service:ProduitsService,
               private famservice:FamilleService,
               private alertCtrl:AlertController,
               private modalCtrl:ModalController,
               private router:Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(data =>{
      this.produits=data;
      this.displayProduits = data;
    });
    this.famservice.getAll().subscribe(res =>{
        this.familles = res ;
    });
  }

  filterList(evt:any) {
    const searchTerm = evt.target.value.toLowerCase();
    if (this.gender=="design_prod") { 
      if (searchTerm === "") {
        this.displayProduits = this.produits;
      }
      else
      {
      this.displayProduits = this.produits.filter((currentClient)=> {
        
          return (currentClient.design_prod.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
        }
      } else if (this.gender=="code_prod") {
    
        if (searchTerm === "") {
          this.displayProduits = this.produits;
        }
        else
        {
        this.displayProduits = this.produits.filter((currentClient)=> {
          
            return (currentClient.code_prod.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
          });
          }
    
      }
      }
    
      addProduit(){
        this.modalCtrl
        .create({
          component: ProduitModalPage
        })
         .then(modal => {
           modal.present();
           return modal.onDidDismiss();
         })
         .then(({data,role}) =>{
           if (role==='created'){
             this.displayProduits.push(data);
           }
         });
      }

removeproduit(id:string){
  this.alertCtrl.create({
    header:'Supprimer',
    message: 'Etes vous sur ?',
    buttons:[
      {
      text:'Oui',
      handler :() => {
        this.service.remove(id).subscribe((data)=>{
          if(data.status == "success"){
           
          this.displayProduits = this.produits.filter(elem => elem.id_prod !== id);// elem :parametre pr pointer les elements de la liste des clients 
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

updateproduit(produit:produit){
  this.modalCtrl
  .create({
    component: ProduitModalPage,
    // il faut passer l'objet client au model
    componentProps: {produit}
  })
   .then (modal => {
     modal.present() ;
    return modal.onDidDismiss();
}).then (({data, role}) =>{
 this.produits = this.produits.filter(std => {
   if (data.id === std.id_prod){
     return data ; // return updated client 
   }
   return std;
 })
});


}
openDetail(){
  this.router.navigateByUrl('/details');
}
}
