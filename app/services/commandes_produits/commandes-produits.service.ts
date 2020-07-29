import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandProduits } from 'src/app/models/commande-produit.model';

@Injectable({
  providedIn: 'root'
})
export class CommandesProduitsService {

  
  private url= 'http://localhost/app/api/commandes_produits';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<[CommandProduits]>(this.url);

  }
  
  create(cmdprod:CommandProduits){
   return  this.http.post<[CommandProduits]>(this.url , cmdprod);
  }
  get(id: string){
    return this.http.get<[CommandProduits]>(this.url + '/' + id);
}


update(cmdProd:CommandProduits[] ){
  return this.http.put(this.url  , cmdProd);
}
}
