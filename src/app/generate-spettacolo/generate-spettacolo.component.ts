import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpettacoloService } from '../spettacolo.service';

@Component({
  selector: 'app-generate-spettacolo',
  templateUrl: './generate-spettacolo.component.html',
  styleUrls: ['./generate-spettacolo.component.css']
})
export class GenerateSpettacoloComponent implements OnInit {

  constructor(private service: SpettacoloService) { }

  ngOnInit(): void {
  }

  generateSpettacolo(generateForm: NgForm) {
    const n_prenotazioni_from_form: number = generateForm.value;
    this.service.generateSpettacolo(n_prenotazioni_from_form);
    //this.service.getAll();
  }

}
