import { Component } from '@angular/core';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { Router } from '@angular/router';
import { ModuleCreate } from '../../../core/models/module.response';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-module-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './module-form.component.html',
  styleUrl: './module-form.component.css'
})
export class ModuleFormComponent {

  constructor(private moduleService:ModuleServiceService,private router:Router){}

  errors: any;
  moduleCreate:ModuleCreate={
    libelle:"",
  }

onSubmit() {
  this.moduleService.add(this.moduleCreate).subscribe(data=>{
    console.log(data.status)
    if(data.status==201){
       this.router.navigateByUrl("/modules")
    }else{
       this.errors=data.results
    }
  })
}
}
