import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { SessionCours } from '../../../core/models/sessionCours.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { SessionServiceService } from '../../../services/impl/session-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,FormsModule],
  templateUrl: './session-liste.component.html',
  styleUrl: './session-liste.component.css'
})
export class SessionListeComponent {
  annuler(id:number) {
    this.sessionService.annuler(0,id).subscribe(data=>{
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });
  
  }
    optionSelectionnee: string = '';
  maFonction(arg0: any) {
  throw new Error('Method not implemented.');
  }
  response?:RestResponse<SessionCours[]> 
  idCours:string |null="all"
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private sessionService:SessionServiceService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.idCours=this.route.snapshot.paramMap.get('id')
    this.refresh();
   
  }
  refresh(page:number=0){
    this.sessionService.findAll(page,this.idCours).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });// Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
