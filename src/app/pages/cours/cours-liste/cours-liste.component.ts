import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestResponse } from '../../../core/models/rest.response';
import { Cours } from '../../../core/models/cours.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { CoursServiceService } from '../../../services/impl/cours-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-cours-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,FormsModule,MenuComponent],
  templateUrl: './cours-liste.component.html',
  styleUrl: './cours-liste.component.css'
})
export class CoursListeComponent implements OnInit {
  optionSelectionnee: string = '';
  maFonction(arg0: string) {
    
    this.refresh(0,this.optionSelectionnee)
  }

  response?:RestResponse<Cours[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private  coursService:CoursServiceService){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page: number = 0, keyword: string=""){
    this.coursService.findAll(page,keyword).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }


}
