import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spettacolo } from './model/Spettacolo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpettacoloService {

  constructor(private http: HttpClient) {}

  list_spettacoli: Spettacolo[] = [];

  // Creating a Spettacolo with the specified number of reservations
  generateSpettacolo(n_prenotazioni: any) {
    this.http
      .post<any>('http://localhost:8080/api/v1/?n_prenotazioni='+n_prenotazioni['n_prenotazioni'], {})
      .subscribe((res) => this.list_spettacoli.push(res));
  }

  // Getting all the Spettacoli 
  getAll() : Observable<any>{
    return this.http.get('http://localhost:8080/api/v1/');
  }
  
  // Inserting a reservation
  prenota(id: BigInt, nominativo: String, numero_telefonico: String) {
    this.http
      .put('http://localhost:8080/api/v1/?id='+id+'&name='+nominativo+'&tel='+numero_telefonico, {})
      .subscribe((data) => {
          console.log(data);
      });
  }

}
