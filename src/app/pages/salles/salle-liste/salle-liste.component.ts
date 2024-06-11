import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { Salle } from '../../../core/models/salle.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { SalleServiceService } from '../../../services/impl/salle-service.service';
import { MenuComponent } from '../../menu/menu.component';


@Component({
  selector: 'app-salle-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './salle-liste.component.html',
  styleUrl: './salle-liste.component.css'
})
export class SalleListeComponent implements OnInit {
  response?:RestResponse<Salle[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private salleService:SalleServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.salleService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
