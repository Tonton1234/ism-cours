import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfesseurCreate } from '../../../core/models/professeur.response';
import { ProfesseurServiceService } from '../../../services/impl/professeur-service.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-professeur-form',
  standalone: true,
  imports: [FormsModule,MenuComponent,MenuComponent],
  templateUrl: './professeur-form.component.html',
  styleUrl: './professeur-form.component.css'
})
export class ProfesseurFormComponent {
  constructor(private professeurService:ProfesseurServiceService,private router:Router){}

  errors: any;
  professeurCreate:ProfesseurCreate={
    nom:"",
    prenom:"",
    username:"",
    password:"",
    specialite:"",
    grade:"",
  
  }

  onSubmit() {
    this.professeurService.add(this.professeurCreate).subscribe(data=>{
      console.log(data);
      if(data.status==201){
         this.router.navigateByUrl("/professeurs")
      }else{
         this.errors=data.results
      }
    })
  }
}
