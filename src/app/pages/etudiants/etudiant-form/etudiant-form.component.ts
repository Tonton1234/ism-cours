import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EtudiantCreate } from '../../../core/models/etudiant.response';
import { EtudiantServiceService } from '../../../services/impl/etudiant-service.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [FormsModule,MenuComponent],
  templateUrl: './etudiant-form.component.html',
  styleUrl: './etudiant-form.component.css'
})
export class EtudiantFormComponent {
  constructor(private etudiantService:EtudiantServiceService,private router:Router){}
  errors: any;
  etudiantCreate:EtudiantCreate={
    nom:"",
    prenom:"",
    username:"",
    password:"",
    matricule:"",
    tuteur:"",
  
  }

  onSubmit() {
    
    this.etudiantService.add(this.etudiantCreate).subscribe(data=>{
      console.log(data.status)
      if(data.status==201){
         this.router.navigateByUrl("/etudiants/all")
      }else{
         this.errors=data.results
      }
    })
  }

}
