import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/models/client.model';
import { ApiResponse } from 'src/app/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {



  private url= 'http://localhost/app/api/clients';

  private currentClientId:string;
  constructor(private http:HttpClient) { }
  
  /**
   * récupération de la liste des clients
   */
  getAll(){
    return this.http.get<[Client]>(this.url);

  }


  get(id: string){
       return this.http.get<Client>(this.url + '/' + id);
  }

  create(client: Client){
      return this.http.post(this.url, client);
  }

  update(client:Client , id:string){
      return this.http.put(this.url + '/' + id, client);
  }

  remove (id:  string) {
        return this.http.delete<ApiResponse>(this.url + '/' + id);
  }
  
  setCurrentClientId(clientId : string){
    this.currentClientId = clientId;
  }
 
  
  getCurrentClientId(){
    return this.currentClientId;
  }
 
  emptyCurrentClientId(){
    this.currentClientId = "";
  }
}
