import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { Salle } from '../../../core/models/salle.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { Module } from '../../../core/models/module.response';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-module-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './module-liste.component.html',
  styleUrl: './module-liste.component.css'
})
export class ModuleListeComponent implements OnInit {
  response?:RestResponse<Module[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private moduleService:ModuleServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.moduleService.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
