import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { Semestre } from '../../../core/models/semestre.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { SemestreServiceService } from '../../../services/impl/semestre-service.service';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-semestre-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './semestre-liste.component.html',
  styleUrl: './semestre-liste.component.css'
})
export class SemestreListeComponent implements OnInit {
  response?:RestResponse<Semestre[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private semestreService:SemestreServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.semestreService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
