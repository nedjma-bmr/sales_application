import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devis } from 'src/app/models/devis.model';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private url= 'http://localhost/app/api/devis';
  private url2='http://localhost/app/api/clientDevis';

  constructor(private http:HttpClient) { }

  /**
   * récupération de la liste des clients
   */
  getAll(){
    return this.http.get<[Devis]>(this.url);

  }


  get(id: string){
       return this.http.get<Devis>(this.url + '/' + id);
  }


  getListDevisByClientId(clientId : string){
    return this.http.get<[Devis]>(this.url2 + '/' + clientId);
  }

  create(devis: Devis){
    return this.http.post(this.url, devis);
}
 
}

