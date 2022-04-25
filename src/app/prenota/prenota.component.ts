import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpettacoloService } from '../spettacolo.service';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent implements OnInit {

  constructor(private service: SpettacoloService) { }

  ngOnInit(): void {
  }

  prenotaPosto(prenotaForm: NgForm) {
    const id_Spettacolo: BigInt = prenotaForm.value['id_Spettacolo'];
    const nominativo_Cliente: String = prenotaForm.value['nominativo'];
    const numero_Telefonico: String = prenotaForm.value['numero_telefonico'];
    this.service.prenota(id_Spettacolo, nominativo_Cliente, numero_Telefonico);
  }

}
