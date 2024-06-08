import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnneeScolaireCreate } from '../../../core/models/anneeScolaire';
import { AnneeScolaireService } from '../../../services/impl/annee-scolaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annee-scolaire-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './annee-scolaire-form.component.html',
  styleUrl: './annee-scolaire-form.component.css'
})
export class AnneeScolaireFormComponent {
  constructor(private anneeScoalireService:AnneeScolaireService,private router:Router){}

errors: any;
anneeScolaireCreate:AnneeScolaireCreate={
  libelle:"",
}

onSubmit() {
 
  this.anneeScoalireService.add(this.anneeScolaireCreate).subscribe(data=>{
    console.log(data.status)
    if(data.status==201){
       this.router.navigateByUrl("/anneeScolaires")
    }else{
       this.errors=data.results
    }
  })
}

}
