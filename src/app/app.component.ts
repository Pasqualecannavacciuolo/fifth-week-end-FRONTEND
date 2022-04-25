import { Component, OnInit } from '@angular/core';
import { Spettacolo } from './model/Spettacolo';
import { SpettacoloService } from './spettacolo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  listTmp: Spettacolo[] = [];

  constructor(private service: SpettacoloService) {
    this.loadSpettacoli()
  }

  loadSpettacoli() {
    this.service.getAll().subscribe( e => {
      this.listTmp = e;
    });
  }

}