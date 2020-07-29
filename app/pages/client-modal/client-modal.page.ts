import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { ClientsService } from "src/app/services/clients/clients.service";
import { Client } from "src/app/models/client.model";

@Component({
  selector: "app-client-modal",
  templateUrl: "./client-modal.page.html",
  styleUrls: ["./client-modal.page.scss"],
})
export class ClientModalPage implements OnInit {
  // recevoir les données envoyés
  @Input() client: Client;
  isUpdate = false; // vérifié si le model est utilisé pr la maj ou nn

  // data to be updated
  data = {
    code_client: "",
    design_client: "",
    adresse: "",
    tel: "",
    email_client: "",
    adresse_liv: "",
  };

  constructor(
    private modalCrtl: ModalController,
    private _clientService: ClientsService
  ) {}

  ngOnInit() {
    if (this.client) {
      // if client is not null that means
      // si le modal est on update mode
      this.isUpdate = true;
      this.data = this.client;
    }
  }

  closeModal() {
    this.modalCrtl.dismiss(null, "fermé");
  }

  onSubmit(form: NgForm) {
    const client = form.value;

    if (this.isUpdate) {
      this._clientService.update(client, this.client.id).subscribe(() => {
        // l'ajouter a l objet etudiant maj
        client.id = this.client.id;
        this.modalCrtl.dismiss(client, "updated");
      });
    } else {
      this._clientService.create(client).subscribe((response) => {
        this.modalCrtl.dismiss(response, "created");
      });
    }
  }
}
