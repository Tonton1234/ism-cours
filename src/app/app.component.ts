import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnneeScolaire } from './core/models/anneeScolaire';
import { RestResponse } from './core/models/rest.response';
import { AnneeScolaireService } from './services/impl/annee-scolaire.service';
import { subscribe } from 'diagnostics_channel';
import { AnneeScolairesComponent } from './pages/anneeScolaire/annee-scolaires/annee-scolaires.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AnneeScolairesComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
  title = 'ism-cours';
 
}
