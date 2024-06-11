import { Component } from '@angular/core';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestResponse } from '../../../core/models/rest.response';
import { Abscence } from '../../../core/models/abscence';
import { PaginationModel } from '../../../core/models/pagination.model';
import { AbscenceServiceService } from '../../../services/impl/abscence-service.service';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-abscence-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './abscence-liste.component.html',
  styleUrl: './abscence-liste.component.css'
})
export class AbscenceListeComponent {
  response?:RestResponse<Abscence[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private  abscenceService:AbscenceServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.abscenceService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
