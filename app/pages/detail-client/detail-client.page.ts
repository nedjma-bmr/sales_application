import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis/devis.service';
import { CommandesService } from 'src/app/services/commandes/commandes.service';
import { commande } from 'src/app/models/commande.model';


@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
})
export class DetailClientPage implements OnInit {
   clientCmd: commande[];
   clientDevis : Devis[];
   id:string;
  constructor( private _clientService : ClientsService ,
    private _devisService : DevisService,
    private serviceCmd : CommandesService) { }

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  

  ngOnInit() {
   this._devisService.getListDevisByClientId(this._clientService.getCurrentClientId()).subscribe(listDevis =>{
     this.clientDevis = listDevis;});
     
     this.serviceCmd.getListCmdByClientId(this._clientService.getCurrentClientId()).subscribe(listcmd =>{
       this.clientCmd =listcmd;
     });

     this.id =this._clientService.getCurrentClientId();

  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  


}
