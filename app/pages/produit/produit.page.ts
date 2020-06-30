import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits/produits.service';
import { produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  gender : string ='' ; 
   produits:produit[];
  displayProduits:produit[];
  
  constructor(private service:ProduitsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.produits=Response;
      this.displayProduits = Response;
    });
  }

  filterList(evt:any) {
 
    let produit = evt.target.value.toLowerCase();
     if (produit === "") {
      this.displayProduits = this.produits;
     }else{
    this.displayProduits = this.produits.filter((nom)=> {
      
        return (nom.nom.toLowerCase().indexOf(produit.toLowerCase()) > -1);
      });
      }
    
  }
  
}
