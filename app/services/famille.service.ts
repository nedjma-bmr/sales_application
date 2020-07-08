import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { produit } from 'src/app/models/produit.model';
import { famille } from '../models/famille.model';


@Injectable({
  providedIn: 'root'
})
export class FamilleService {

 
  private url= 'http://localhost/app/api/famille';


  constructor(private http:HttpClient) { }
  
  /**
   * récupération de la liste des clients
   */
  getAll(){
    return this.http.get<[famille]>(this.url);

  }


  get(code_fam:number){
       return this.http.get<famille>(this.url + '/' + code_fam);
  }

  
}