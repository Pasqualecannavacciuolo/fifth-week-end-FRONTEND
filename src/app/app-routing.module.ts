import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenerateSpettacoloComponent } from './generate-spettacolo/generate-spettacolo.component';
import { PrenotaComponent } from './prenota/prenota.component';

const routes: Routes = [
  {path: 'generaSpettacolo', component: GenerateSpettacoloComponent},
  {path: 'prenotaPosto', component: PrenotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
