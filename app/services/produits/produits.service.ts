import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produit } from 'src/app/models/produit.model';
import { ApiResponse } from 'src/app/models/api-response.model';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

 
  private url= 'http://localhost/app/api/produit';


  constructor(private http:HttpClient) { }
  
  /**
   * récupération de la liste des clients
   */
  getAll(){
    return this.http.get<[produit]>(this.url);

  }


  get(id: string){
       return this.http.get<produit>(this.url + '/' + id);
  }

  
  create(produit: produit){
    return this.http.post(this.url, produit);
}

update(produit:produit ,id:string){
  return this.http.put(this.url + '/' + id, produit);
}

remove (id:string) {
      return this.http.delete<ApiResponse>(this.url + '/' + id);
}

}


