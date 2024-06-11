import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { AnneeScolaire } from '../../../core/models/anneeScolaire';
import { AnneeScolaireService } from '../../../services/impl/annee-scolaire.service';
import { CommonModule } from '@angular/common';
import { PaginationModel } from '../../../core/models/pagination.model';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-annee-scolaires',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './annee-scolaires.component.html',
  styleUrl: './annee-scolaires.component.css'
})
export class AnneeScolairesComponent implements OnInit {

  response?:RestResponse<AnneeScolaire[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private anneescolaireService:AnneeScolaireService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.anneescolaireService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }

}
