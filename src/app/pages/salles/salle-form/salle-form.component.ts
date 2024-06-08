import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModuleCreate } from '../../../core/models/module.response';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { Router } from '@angular/router';
import { SalleCreate } from '../../../core/models/salle.response';
import { SalleServiceService } from '../../../services/impl/salle-service.service';

@Component({
  selector: 'app-salle-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './salle-form.component.html',
  styleUrl: './salle-form.component.css'
})
export class SalleFormComponent {
  constructor(private salleService:SalleServiceService,private router:Router){}

  errors: any;
salleCreate:SalleCreate={
  nom:"",
  numero:"",
  nbrePlaces:0,
}

onSubmit() {
  console.log(this.salleCreate)
  this.salleService.add(this.salleCreate).subscribe(data=>{
    console.log(data.status)
    if(data.status==201){
       this.router.navigateByUrl("/salles")
    }else{
       this.errors=data.results
    }
  })
}

}
