import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnneeScolaire } from './models/anneeScolaire';
import { RestResponse } from './models/rest.response';
import { AnneeScolaireService } from './services/impl/annee-scolaire.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ism-cours';
  response?:RestResponse<AnneeScolaire[]> 
  constructor(private anneescolaireService:AnneeScolaireService){}
  ngOnInit(): void {
    this.anneescolaireService.findAll().subscribe(data=>{
      
      this.response=data
    });
   
  }
}
