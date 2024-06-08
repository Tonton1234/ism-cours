import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { Professeur } from '../../../core/models/professeur.response';
import { RestResponse } from '../../../core/models/rest.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { ProfesseurServiceService } from '../../../services/impl/professeur-service.service';

@Component({
  selector: 'app-professeur-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent],
  templateUrl: './professeur-liste.component.html',
  styleUrl: './professeur-liste.component.css'
})
export class ProfesseurListeComponent implements OnInit  {
  response?:RestResponse<Professeur[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private  professeurService:ProfesseurServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.professeurService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
