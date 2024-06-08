import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { Classe } from '../../../core/models/classe.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';

@Component({
  selector: 'app-classe-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent],
  templateUrl: './classe-liste.component.html',
  styleUrl: './classe-liste.component.css'
})
export class ClasseListeComponent implements OnInit {
  response?:RestResponse<Classe[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private  classeService:ClasseServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.classeService.findAll(page).subscribe(data=>{
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }

}
