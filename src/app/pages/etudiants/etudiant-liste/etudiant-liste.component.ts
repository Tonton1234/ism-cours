import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { RestResponse } from '../../../core/models/rest.response';
import { Etudiant } from '../../../core/models/etudiant.response';
import { PaginationModel } from '../../../core/models/pagination.model';
import { EtudiantServiceService } from '../../../services/impl/etudiant-service.service';
import { FormsModule } from '@angular/forms';
import { Classe } from '../../../core/models/classe.response';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';
@Component({
  selector: 'app-etudiant-liste',
  standalone: true,
  imports: [CommonModule, RouterLink,PaginationComponent,FormsModule],
  templateUrl: './etudiant-liste.component.html',
  styleUrl: './etudiant-liste.component.css'
})
export class EtudiantListeComponent implements OnInit {
  selectedFile: File | undefined;
onFileSelected(event: any):void {
  console.log(this.selectedFile)
  this.selectedFile = event.target.files[0];
}
importStudents() {
  
  if (this.selectedFile) {
    this.etudiantService.importStudents(this.selectedFile)
      .subscribe(() => {
        // Import réussi, mettre à jour la liste des étudiants
        this.refresh();
      }, error => {
        // Erreur lors de l'import, afficher un message d'erreur
        console.error('Erreur lors de l\'import des étudiants', error);
      });
  } else {
    // Aucun fichier sélectionné, afficher un message d'erreur ou prendre une autre action
    console.error('Aucun fichier sélectionné');
  }
}
optionSelectionnee: string = '';

maFonction(arg0: any) {
  if (this.optionSelectionnee=='') {
    this.refresh();
  }else{
    this.refresh(0,1);
  }
 
}
  response?:RestResponse<Etudiant[]> 
  classes?:RestResponse<Classe[]>
  idCours:string |null="all"
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }
  constructor(private etudiantService:EtudiantServiceService,private classeService:ClasseServiceService , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.idCours=this.route.snapshot.paramMap.get('id')
    this.refresh();
   
  }
  refresh(page:number=0,filter:number=0){
    if (filter==1) {
    
      this.etudiantService.findByClasse(page,this.optionSelectionnee).subscribe(data=>{
        this.response=data
        this.dataPagination.pages=data.pages!
        this.dataPagination.currentPage=data.currentPage!
      });
    }else{
       this.etudiantService.findAll(page,this.idCours).subscribe(data=>{
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });}
   

    this.classeService.findAll(0).subscribe(data=>{
      this.classes=data
    });
    // Au demarrage 
  }
  paginate(page: number) {
    this.refresh(page);
  }
}
