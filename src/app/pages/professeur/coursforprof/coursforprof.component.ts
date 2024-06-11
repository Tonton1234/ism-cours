import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../../menu/menu.component';
import { PaginationModel } from '../../../core/models/pagination.model';
import { RestResponse } from '../../../core/models/rest.response';
import { Cours } from '../../../core/models/cours.response';
import { CoursServiceService } from '../../../services/impl/cours-service.service';

@Component({
  selector: 'app-coursforprof',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,FormsModule,MenuComponent],
  templateUrl: './coursforprof.component.html',
  styleUrl: './coursforprof.component.css'
})
export class CoursforprofComponent implements OnInit{ 
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
    this.coursService.findByProf(localStorage.getItem('auth')!).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }

}
