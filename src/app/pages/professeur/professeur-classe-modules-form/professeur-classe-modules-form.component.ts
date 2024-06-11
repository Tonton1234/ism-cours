import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfesseurClasseModulesCreate } from '../../../core/models/professeurClasseModules.response';
import { ProfesseurServiceService } from '../../../services/impl/professeur-service.service';
import { RestResponse } from '../../../core/models/rest.response';
import { Professeur } from '../../../core/models/professeur.response';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { group } from 'console';
import { ClasseServiceService } from '../../../services/impl/classe-service.service';
import { ModuleServiceService } from '../../../services/impl/module-service.service';
import { Classe } from '../../../core/models/classe.response';
import { Module } from '../../../core/models/module.response';
import { SemestreServiceService } from '../../../services/impl/semestre-service.service';
import { Semestre } from '../../../core/models/semestre.response';
import { ProfesseurClasseModulesServiceService } from '../../../services/impl/professeur-classe-modules-service.service';
import { Select2Module } from 'ng-select2-component';
import { MenuComponent } from '../../menu/menu.component';


@Component({
  selector: 'app-professeur-classe-modules-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,Select2Module,MenuComponent],
  templateUrl: './professeur-classe-modules-form.component.html',
  styleUrl: './professeur-classe-modules-form.component.css'
})
export class ProfesseurClasseModulesFormComponent implements OnInit {
classes?: RestResponse<Classe[]> ;
professeurs?:RestResponse<Professeur[]> 
modules?:RestResponse<Module[]> 
semestres?:RestResponse<Semestre[]> 
overlay= false;
dataModules: any=[];
  constructor(private fb: FormBuilder,
    private classeService:ClasseServiceService,
    private moduleService:ModuleServiceService,
    private professeurService:ProfesseurServiceService,
    private semestreService:SemestreServiceService,
    private router:Router,
    private professeurClasseModuleService:ProfesseurClasseModulesServiceService,
    ){
    
  }

onSubmit() {
  
  const {...professeurClasseModules} = this.form.value
 
      this.professeurClasseModuleService.add(professeurClasseModules).subscribe(data=>{

            this.form.reset();
            this.router.navigateByUrl("/professeurs/classe")
        
      });
}
form=this.fb.group({
  classeId: [0,[Validators.required]],
  professeurId: [0,[Validators.required]],
  modules:[[],[Validators.required]],
  semestre: [0,[Validators.required]],
})

  ngOnInit(): void {
    
    this.refresh();
  }
 
  refresh(page:number=0){
    this.classeService.findAll(page).subscribe(data=>{
      this.classes=data
     
    });
    this.professeurService.findAll(page).subscribe(data=>{
      this.professeurs=data
     
    });
    this.moduleService.findAll(page).subscribe(data=>{
      this.modules=data;
     for (let index = 0; index < data.results.length; index++) {
        this.dataModules.push({value:`${data.results[index].id}`,label:`${data.results[index].libelle}`})}
     
    });
    this.semestreService.findAll(page).subscribe(data=>{
      this.semestres=data
     
    });
    // Au demarrage 
  }
  
}
