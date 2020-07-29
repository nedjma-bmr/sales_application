import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DevisProduits} from 'src/app/models/devis-produits.model'
import { ProduitsDevisPage } from 'src/app/pages/produits-devis/produits-devis.page';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisProduitsService {

  private url= 'http://localhost/app/api/devisProduits';

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<[DevisProduits]>(this.url);

  }

  get(id: string){
    return this.http.get<[DevisProduits]>(this.url + '/' + id);
}


update(devisProd:DevisProduits[] ){
  return this.http.put(this.url  , devisProd);
}
  
}

