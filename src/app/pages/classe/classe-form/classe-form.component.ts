import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';
import { Router } from '@angular/router';
import { ClasseCreate, Filiere, Niveau } from '../../../core/models/classe.response';

@Component({
  selector: 'app-classe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './classe-form.component.html',
  styleUrl: './classe-form.component.css'
})
export class ClasseFormComponent {
  constructor(private classeService:ClasseServiceService,private router:Router){}
  onSubmit() {
    console.log(this.classeCreate.place)
    this.classeService.add(this.classeCreate).subscribe(data=>{
      console.log(data.status)
      if(data.status==201){
         this.router.navigateByUrl("/classes")
      }else{
         this.errors=data.results
      }
    })
  }
  errors: any;
  classeCreate:ClasseCreate={
    libelle:"",
    place:0,
    filiere:"",
    niveau:""
    
  }
 

}
